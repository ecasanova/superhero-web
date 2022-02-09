/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import {createSelector} from 'reselect';

export const getSuperheroDetailsData = (state) => {
  return state.superheroeDetail;
};

export const getSuperheroDetails = createSelector(
  getSuperheroDetailsData,
  (data) => {
    return data;
  },
);
