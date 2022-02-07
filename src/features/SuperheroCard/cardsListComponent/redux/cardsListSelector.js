/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import {createSelector} from 'reselect';

export const getDataSuperheroes = (state) => {
  return state.superheroes;
};

export const getSuperheroeslist = createSelector(getDataSuperheroes, (data) => {
  return [...data.superheroes];
});
