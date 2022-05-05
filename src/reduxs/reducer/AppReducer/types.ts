import {ItemType} from '../../../types/appType';

export interface AppState {
  data: ItemType[];
  fetching: boolean;
  textSearch: string;
}

export interface SuperheroSuccessPayload {
  data: ItemType[];
}

export interface SearchSuperheroPayload {
  text: string;
}
