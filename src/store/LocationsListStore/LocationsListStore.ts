import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { ILocations, ILocationsResult } from "../../types/locations";
import { debounce } from "../../utils/utils";

class LocationsList {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false;
  errorMessage = '';
  locationsList = [] as ILocationsResult[];
  locationsQuantity = 0 as number | null;
  page = 0;
  name = '';
  requestName = '';


  incrementLocationsList(locations: ILocationsResult[]) {
    this.locationsList = [...this.locationsList, ...locations]
  }

  incrementLocationsPage() {
    this.page ++
  }

  resetLocations() {
    this.page = 0;
    this.errorMessage = '';
    if (this.locationsList.length < 5) {
      this.page = 1;
      this.getLocations()
    }
    this.locationsList = [];
  }

  debounceResetLocations = debounce(() => {
    this.resetLocations();
  }, 500);

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.name = evt.target.value;
    this.requestName = this.name ? `&name=${this.name}` : '';
    this.debounceResetLocations();
  }


  async getLocations() {
    try {
      runInAction(() => {
        this.isLoading = true;
      })
      const response = await axios.get<ILocations>(`https://rickandmortyapi.com/api/location/?page=${this.page}${this.requestName}`);
      runInAction(() => {
        this.incrementLocationsList(response.data.results);
        this.incrementLocationsPage();
        this.locationsQuantity = response.data.info.count
      })
    }

    catch {
      runInAction(() => {
        if (!this.locationsList.length) {
          this.errorMessage = 'Locations not found';
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

export default new LocationsList();