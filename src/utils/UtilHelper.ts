import {ItemType} from '../types/appType';

export function transformSuperheroListAbleToSearch(data?: ItemType[]) {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.map(item => {
    return {
      ...item,
      textForSearch: `${item.aliases[0]}|${item.name}|${item.playedBy[0]}|${item.gender}`,
      displayName: item.aliases[0] || item.name,
    };
  });
}
