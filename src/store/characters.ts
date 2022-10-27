import axios from "axios";
import {makeAutoObservable, runInAction } from 'mobx';
import { ICharacters, IResult } from "../types/characters";
import { IResultEpisode } from "../types/episodes";

class Character {
  constructor() {
    makeAutoObservable(this)
  }

  charactersList = [] as IResult[]; // Список персонажей на главной странице
  page = 1 as number; // Номер подгружаемой страницы

  // функция подгружает персонажей, увеличивая число страницы на 1

  async getCharacters() {
    const response = await axios.get<ICharacters>(`https://rickandmortyapi.com/api/character/?page=${this.page}`);
    runInAction(() => {
      this.charactersList = [...this.charactersList, ...response.data.results]
      this.page = this.page + 1;
    })
  } 

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

  async getSingleCharacter(characterId: number) {
    runInAction(() => {
      // Обнуление состояния персонажа перед загрузкой данных
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
}

export default new Character();
