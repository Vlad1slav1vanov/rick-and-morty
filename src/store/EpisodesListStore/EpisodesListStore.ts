import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IEpisodes, IResultEpisode } from "../../types/episodes";
import { debounce } from "../../utils/utils";

class EpisodesList {
  constructor() {
    makeAutoObservable(this)
  }

  episodesList = [] as IResultEpisode[];
  isLoading = false;
  episodesQuantity = 0 as number | null;
  page = 0;
  errorMessage = '';

  // функция прибавляет результат запроса в массив эпизодов
  incrementEpisodesList(episodes: IResultEpisode[]) {
    this.episodesList = [...this.episodesList, ...episodes]
  }

  incrementEpisodesPage() {
    this.page ++
  }

  async getEpisodes() {
    try {
      runInAction(() => {
        this.isLoading = true;
      })
      const response = await axios.get<IEpisodes>(`https://rickandmortyapi.com/api/episode/?page=${this.page}`);
      runInAction (() => {
        this.incrementEpisodesList(response.data.results);
        this.episodesQuantity = response.data.info.count
      })
    }

    catch {
      if (!this.episodesList.length) {
        this.errorMessage = 'Episodes not found. 404. Please, try reload page'
      }
    }

    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }
}

export default new EpisodesList();