import axios from "axios";
import {makeAutoObservable, runInAction } from 'mobx';
import { ICharacters, IResult } from "../types/types";

class Character {
  constructor() {
    makeAutoObservable(this)
  }

  characters = [] as IResult[];
  page = 1 as number;

  async getCharacters() {
    const response = await axios.get<ICharacters>(`https://rickandmortyapi.com/api/character/?page=${this.page}`);
    runInAction(() => {
      this.characters = [...this.characters, ...response.data.results]
      this.page = this.page + 1;
    })
  }
}

export default new Character();
