/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import {createSelector} from 'reselect';

export const getSuperheroes = (state) => {
  return state.superheroes;
};

export const getDataPagination = (state) => {
  return state.page;
};

export const getFilters = (state) => {
  return state.filters;
};

export const getSuperheroeslist = createSelector(
  getSuperheroes,
  (superheroes) => {
    return superheroes;
  },
);
