import axios from "axios";
import {makeAutoObservable, runInAction } from 'mobx';
import React from "react";
import { ICharacters, IResult } from "../../types/characters";
import { debounce } from "../../utils/utils";
class CharactersListStore {
  // Конструктор
  constructor() {
    makeAutoObservable(this)
  }
  isLoading = false;
  // Сообщение об ошибке
  errorMessage = ''
  // кол-во найденных персонажей
  charactersQuantity = 0 as number | null; 
  // список персонажей
  charactersList = [] as IResult[];
  // текущая страница персонажей
  page = 0;
  // текущее имя в поиске персонажа
  name = '';
  requestName = '';
  // текущий статус в фильтре
  status = '';
  requestStatus = '';
  // текущий гендер в фильтре
  gender = '';
  requestGender = '';
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
    this.errorMessage = '';
    this.charactersList = [];
    this.page = 0;
  }

  debounceResetCharacters = debounce(() => {
    this.resetCharacters();
  }, 500);

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.name = evt.target.value;
    this.requestName = this.name ? `&name=${this.name}` : '';
    this.debounceResetCharacters();
  }
  
  genderOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    this.gender = evt.target.value;
    this.requestGender = this.gender ? `&gender=${this.gender}` : '';
    this.debounceResetCharacters();
  }

  statusOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    this.status = evt.target.value;
    this.requestStatus = this.status ? `&status=${this.status}` : '';
    this.debounceResetCharacters();
  }

  // функция запроса персонажей с сервера по текущим фильтрам и прибавления текущей старницы
  async getCharacters() {
    try {
      runInAction(() => {
        this.isLoading = true;
      })
      const response = await axios.get<ICharacters>(`https://rickandmortyapi.com/api/character/?page=${this.page}${this.requestName}${this.requestGender}${this.requestStatus}`)
      runInAction(() => {
        this.incrementCharactersList(response.data.results);
        this.charactersQuantity = response.data.info.count;
      })
    }
    catch (error) {
      if (!this.charactersList.length) {
        this.errorMessage = 'Nothing Characters was found according to your request. Please change your search parameters';
        this.charactersQuantity = 0;       
      }
    }
    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }   
}

export default new CharactersListStore();
