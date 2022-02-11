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
  [getSuperheroes, getFilters, getPagination],
  (superheroes, filters, pagination) => {
    return superheroes.superheroes.slice(0, pagination.page * 4);
  },
);
