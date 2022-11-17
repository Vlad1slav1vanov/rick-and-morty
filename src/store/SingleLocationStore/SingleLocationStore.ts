import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import LocationsList from "../../components/Locations/LocationsList/LocationsList";
import { IResult } from "../../types/characters";
import { ILocationsResult } from "../../types/locations";

class SingleLocation {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false;
  errorMessage = '';
  // изначальное состояние 1 локации
  emptySingleLocation: ILocationsResult = {
    id: null,
    name: '',
    type: '',
    dimension: '',
    residents: [],
    url: '',
    creates: '',
  }
  // присвоение локации пустого состояния
  singleLocation: ILocationsResult = this.emptySingleLocation;
  // изначальное состояние списка персонажей живущих в локации
  singleLocationCharacters: IResult[] = [];
  // функция получения отдельного эпизода 
  async getSingleLocation(locationId: number) {
    try {
      // обнуления состояния локации
      runInAction(() => {
        this.isLoading = true;
        this.singleLocationCharacters = [];
        this.singleLocation = this.emptySingleLocation
      })
      // запрос локации
      const response = await axios.get<ILocationsResult>(`https://rickandmortyapi.com/api/location/${locationId}`)
      // запрос на каждого персонажа живущего
      response.data.residents.forEach(async character => {
        const responseCharacters = await axios.get<IResult>(character);
        // прибавление обьекта персонажа в список персонажей локации
        runInAction(() => {
          this.singleLocationCharacters.push(responseCharacters.data)
        })
      })
      runInAction(() => {
        this.singleLocation = response.data;
      })
    }

    catch (error) {
      runInAction(() => {
        this.errorMessage = 'Location not found'
      })
    }

    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }
}

export default new SingleLocation();