import Apisauce from 'apisauce';
import {ItemType} from '../types/appType';

function create(BASE_URL = 'https://anapioficeandfire.com/api') {
  const api = Apisauce.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  async function getDcSuperheroes() {
    return api.get<ItemType[]>('/characters?page=1&pageSize=25');
  }

  return {getDcSuperheroes};
}

export default {
  create,
};
