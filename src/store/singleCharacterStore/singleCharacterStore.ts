import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IResult } from "../../types/characters";
import { IResultEpisode } from "../../types/episodes";

class SingleCharacterStore {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false;
  errorMessage = '';

  // Изначальное состояние персонажа
  EmptySingleCharacter: IResult = {
    id: null,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  };

  singleCharacter: IResult = this.EmptySingleCharacter // Состояние персонажа (присваивается изначально пустое)
  singleCharacterEpisodes = [] as IResultEpisode[]; // список обьектов эпизодов в которых персонаж участвовал (изначальное состояние пустой)
  // функция запроса одного персонажа
  async getSingleCharacter(characterId: number) {
    try {
      runInAction(() => {
        // Обнуление состояния персонажа перед загрузкой данных
        this.isLoading = true;
        this.singleCharacter = this.EmptySingleCharacter;
        this.singleCharacterEpisodes = [];
      })
      // запрос персонажа
      const response = await axios.get<IResult>(`https://rickandmortyapi.com/api/character/${characterId}`);
      // запрос на каждый ЮРЛ эпизодов персонажа
      response.data.episode.forEach(async episode => {
        const responseEpisodes = await axios.get<IResultEpisode>(episode);
        // прибавление обьекта эпизода в список эпизодов персонажа
        runInAction(() => {
          this.singleCharacterEpisodes.push(responseEpisodes.data)
        })
      })
      // присвоение состояния персонажа взамен пустому изначальному
      runInAction(() => {
        this.singleCharacter = response.data;
      })
    }

    catch (error) {
      this.errorMessage = 'Character not found'
    }

    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }

}

export default new SingleCharacterStore();