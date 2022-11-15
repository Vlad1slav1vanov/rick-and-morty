export interface IInfoEpisodes {
  count: number | null;
  pages: number | null;
  next: string | null;
  prev: string | null;
}

export interface IResultEpisode {
  id: number | null;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodes {
  info: IInfoEpisodes;
  results: IResultEpisode[];
}