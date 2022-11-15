export interface ILocationsInfo {
  count: number | null;
  pages: number | null;
  next: string | null;
  prev: string | null;
}

export interface ILocationsResult {
  id: number | null;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  creates: string;
}

export interface ILocations {
  info: ILocationsInfo;
  results: ILocationsResult[];
}
