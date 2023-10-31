import axios from 'axios';
import { CharacterResponseInterface } from './rick-api.models.ts';

export class RickApiServices {
  public static async characterSearch(searchWord: string, page?: number) {
    try {
      const response = await axios.get<CharacterResponseInterface>(
        `https://rickandmortyapi.com/api/character/?name=${searchWord}&page=${
          page || 1
        }`
      );
      return response.data;
    } catch (error) {
      return;
    }
  }
}
