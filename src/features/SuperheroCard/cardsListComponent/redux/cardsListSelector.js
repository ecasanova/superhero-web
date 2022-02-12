/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import {createSelector} from 'reselect';

export const getSuperheroes = (state) => {
  return state.superheroes;
};

export const getFilters = (state) => {
  return state.filters;
};

export const getPagination = (state) => {
  return state.page;
};

export const getSuperheroeslist = createSelector(
  [getSuperheroes, getPagination, getFilters],
  (superheroesList, pagination, filteredList) => {
    if (filteredList.superheroes.length > 0) {
      return filteredList.superheroes.slice(0, pagination.page * 8);
    } else {
      return [];
    }
  },
);
