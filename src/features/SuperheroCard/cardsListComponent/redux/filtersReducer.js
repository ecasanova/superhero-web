import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: [],
  gender: [],
  alignment: [],
  intelligence: {min: 0, max: 100},
  strength: {min: 0, max: 100},
  speed: {min: 0, max: 100},
  durability: {min: 0, max: 100},
  power: {min: 0, max: 100},
  combat: {min: 0, max: 100},
};
const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterByName: (filterState, value) => {
      filterState.filter((str) => {
        return str.name.includes(value);
      });
    },
    filterByGender: (filterState, value) => {
      filterState.filter((str) => {
        return str.gender.includes(value);
      });
    },
    filterByAlignment: (filterState, value) => {
      filterState.filter((str) => {
        return str.alignment.includes(value);
      });
    },
    filterByIntelligence: (filterState, value) => {
      filterState.filter((str) => {
        return (
          str.powerstats.intelligence >= value.min &&
          str.powerstats.intelligence <= value.max
        );
      });
    },
    filterBySpeed: (filterState, value) => {
      filterState.filter((str) => {
        return (
          str.powerstats.speed >= value.min && str.powerstats.speed <= value.max
        );
      });
    },
    filterByStrength: (filterState, value) => {
      filterState.filter((str) => {
        return (
          str.powerstats.strength >= value.min &&
          str.powerstats.strength <= value.max
        );
      });
    },
    filterByDurability: (filterState, value) => {
      filterState.filter((str) => {
        return (
          str.powerstats.durability >= value.min &&
          str.powerstats.durability <= value.max
        );
      });
    },
    filterByPower: (filterState, value) => {
      filterState.filter((str) => {
        return (
          str.powerstats.power >= value.min && str.powerstats.power <= value.max
        );
      });
    },
    filterByCombat: (filterState, value) => {
      filterState.filter((str) => {
        return (
          str.powerstats.combat >= value.min &&
          str.powerstats.combat <= value.max
        );
      });
    },
  },
});

export const {nextPage, prevPage} = filters.actions;
export default filters.reducer;
