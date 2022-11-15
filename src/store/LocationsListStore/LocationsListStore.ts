import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { ILocations, ILocationsResult } from "../../types/locations";

class LocationsList {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false;
  errorMessage = '';
  locationsList = [] as ILocationsResult[];
  locationsQuantity = 0 as number | null;
  page = 0;

  incrementLocationsList(locations: ILocationsResult[]) {
    this.locationsList = [...this.locationsList, ...locations]
  }

  incrementLocationsPage() {
    this.page ++
  }


  async getLocations() {
    try {
      runInAction(() => {
        this.isLoading = true;
      })
      const response = await axios.get<ILocations>(`https://rickandmortyapi.com/api/location/?page=${this.page}`);
      runInAction(() => {
        this.incrementLocationsList(response.data.results);
        this.incrementLocationsPage();
        this.locationsQuantity = response.data.info.count
      })
    }

    catch {
      if (!this.locationsList.length) {
        this.errorMessage = 'Locations not found';
      }
    }

    finally {
      runInAction(() => {
        this.isLoading = false;
      })
    }
  }
}

export default new LocationsList();