import { dotaHeroes } from './dota-heroes.data';
import { attributeMatches } from '../../../core/data';

const matchSearchCriteria = ({ name, localized_name, primary_attr }, search) => {
  return (
    attributeMatches(name, search) |
    attributeMatches(localized_name, search) |
    attributeMatches(primary_attr, search)
  );
};

export const list = search => {
  let result = { total: dotaHeroes.length, list: dotaHeroes };

  if (search) {
    const matchedHeroes = dotaHeroes.filter(hero => matchSearchCriteria(hero, search));
    result = { total: matchedHeroes.length, list: matchedHeroes };
  }

  return result;
};
