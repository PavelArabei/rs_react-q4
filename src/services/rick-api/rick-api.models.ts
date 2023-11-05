export interface CharacterInterface {
  id: 14;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: '';
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface CharacterResponseInterface {
  info: CharacterInfo;
  results: CharacterInterface[];
}
