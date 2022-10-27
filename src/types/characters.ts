export interface IInfo {
  count: number | null;
  pages: number | null;
  next: string | null;
  prev: string | null;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IResult {
  id: number | null;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacters {
  info: IInfo;
  results: IResult[];
}


