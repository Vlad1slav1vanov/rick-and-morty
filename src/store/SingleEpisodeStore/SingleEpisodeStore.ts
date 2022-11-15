import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IResult } from "../../types/characters";
import { IResultEpisode } from "../../types/episodes";

class SingleEpisode {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false;
  errorMessage = '';
  // изначальное состояние 1 эпизода
  emptySingleEpisode: IResultEpisode = {
    id: null,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
    created: '',
  }
  // присвоение эпизоду пустого состояния
  singleEpisode: IResultEpisode = this.emptySingleEpisode;
  // изнвачальное состояние списка персонажей участвовавших в эпизоде
  singleEpisodeCharacters: IResult[] = [];
  // функция получения отдельного эпизода 
  async getSingleEpisode(episodeId: number) {
    try {
      // обнуления состояния эпизода
      runInAction(() => {
        this.isLoading = true;
        this.singleEpisodeCharacters = [];
        this.singleEpisode = this.emptySingleEpisode
      })
      // запрос эпизода
      const response = await axios.get<IResultEpisode>(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      // запрос на каждого персонажа учавствовавшего в эпизоде 
      response.data.characters.forEach(async character => {
        const responseCharacters = await axios.get<IResult>(character);
        // прибавление обьекта персонажа в список персонажей эпизода
        runInAction(() => {
          this.singleEpisodeCharacters.push(responseCharacters.data)
        })
      })
      runInAction(() => {
        this.singleEpisode = response.data;
      })
    }

    catch (error) {
      this.errorMessage = 'Episode not found'
    }

    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }
}

export default new SingleEpisode();