export interface ICharacterCard {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
}

export interface IInfo {
  count: number;
  pages: number | null;
  next: string | null;
  prev: string | null;
}

export interface IData {
  results: ICharacterCard[];
}


