import axios from "axios";
import {makeAutoObservable, runInAction } from 'mobx';
import { ICharacters, IResult } from "../types/characters";
import { IResultEpisode } from "../types/episodes";
import { debounce } from "../utils/utils";



class Character {
  // Конструктор
  constructor() {
    makeAutoObservable(this)
  }

  // список персонажей
  charactersList = [] as IResult[];
  // текущая страница персонажей
  page = 1;
  // текущее имя в поиске персонажа
  name = '';
  // текущий статус в фильтре
  status = '';
  // текущий гендер в фильтре
  gender = '';
  // функция прибавляет + 1 страницу к текущей
  incrementCharactersPage() {
    this.page ++;
  }
  // функция прибавляет результат запроса в массив персонажей
  incrementCharactersList(characters: IResult[]) {
    this.charactersList = [...this.charactersList, ...characters]
  }
  // функция обнуляет массив персонажей
  resetCharacters() {
    this.charactersList = [];
    this.page = 1;
  }
  // функция обновляет массив персонажей через указаное время 
  debounceResetCharacters = debounce(() => this.resetCharacters(), 500)
  // функция изменяет фильтр имени персонажа
  nameOnChange = ( evt: { target: { value: string; }; }) => {
    this.name = evt.target.value;
    this.debounceResetCharacters()
  }
// функция изменяет фильтр статуса персонажа
  statusOnChange = ( evt: { target: { value: string; }; }) => {
    this.status = evt.target.value;
    this.debounceResetCharacters()
  }
  // функция изменяет фильтр гендера персонажа
  genderOnChange = ( evt: { target: { value: string; }; }) => {
    this.gender = evt.target.value;
    this.debounceResetCharacters()
  }
  // функция запроса персонажей с сервера по текущим фильтрам и прибавления текущей старницы
  async getCharacters() {
    try {
      const response = await axios.get<ICharacters>
      (`https://rickandmortyapi.com/api/character/?page=${this.page}&name=${this.name}&status=${this.status}&gender=${this.gender}`)
      runInAction(() => {
        this.incrementCharactersList(response.data.results)
      })
    }
    catch {
      
    }
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
  // функция запроса одного персонажа
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
