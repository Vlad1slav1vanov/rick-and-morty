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
  name = '';
  requestName = '';

  // функция прибавляет результат запроса в массив эпизодов
  incrementEpisodesList(episodes: IResultEpisode[]) {
    this.episodesList = [...this.episodesList, ...episodes]
  }

  incrementEpisodesPage() {
    this.page ++
  }

  resetEpisodes() {
    this.page = 0;
    this.errorMessage = '';
    if (this.episodesList.length < 5) {
      this.page = 1;
      this.getEpisodes()
    }
    this.episodesList = [];
  }

  debounceResetEpisodes = debounce(() => {
    this.resetEpisodes();
  }, 500);

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.name = evt.target.value;
    this.requestName = this.name ? `&name=${this.name}` : '';
    this.debounceResetEpisodes();
  }

  async getEpisodes() {
    try {
      runInAction(() => {
        this.isLoading = true;
      })
      const response = await axios.get<IEpisodes>(`https://rickandmortyapi.com/api/episode/?page=${this.page}${this.requestName}`);
      runInAction (() => {
        this.incrementEpisodesList(response.data.results);
        this.episodesQuantity = response.data.info.count
      })
    }

    catch {
      runInAction(() => {
        if (!this.episodesList.length) {
          this.errorMessage = 'Episodes not found. 404. Please, try reload page'
        }
      })
    }

    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }
}

export default new EpisodesList();