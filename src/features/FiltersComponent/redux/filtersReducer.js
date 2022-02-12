import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  superheroes: [],
  filters: [],
};
const filters = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    filterBy: (state, action) => {
      let data = action.payload;
      //console.log(data.filters);

      let filteredList = data.superheroes.superheroes;

      if (data.filters.name !== '' && data.filters.name.length > 1) {
        filteredList = filteredList.filter((elm) =>
          elm.name.startsWith(data.filters.name),
        );
      }

      if (data.filters.gender !== '') {
        filteredList = filteredList.filter((elm) => {
          return elm.appearance.gender == data.filters.gender;
        });
      }

      if (data.filters.alignment !== '') {
        filteredList = filteredList.filter((elm) => {
          return elm.biography.alignment == data.filters.alignment;
        });
      }

      if (data.filters.powerstats.includes('intelligence')) {
        if (
          data.filters.intelligence[0] !== 0 ||
          data.filters.intelligence[1] !== 100
        ) {
          filteredList = filteredList.filter((elm) => {
            return (
              elm.powerstats.intelligence >= data.filters.intelligence[0] &&
              elm.powerstats.intelligence <= data.filters.intelligence[1]
            );
          });
        }
      }

      if (data.filters.powerstats.includes('power')) {
        if (data.filters.power[0] !== 0 || data.filters.power[1] !== 100) {
          filteredList = filteredList.filter((elm) => {
            return (
              elm.powerstats.power >= data.filters.power[0] &&
              elm.powerstats.power <= data.filters.power[1]
            );
          });
        }
      }

      if (data.filters.powerstats.includes('strength')) {
        if (
          data.filters.strength[0] !== 0 ||
          data.filters.strength[1] !== 100
        ) {
          filteredList = filteredList.filter((elm) => {
            return (
              elm.powerstats.strength >= data.filters.strength[0] &&
              elm.powerstats.strength <= data.filters.strength[1]
            );
          });
        }
      }

      if (data.filters.powerstats.includes('speed')) {
        if (data.filters.speed[0] !== 0 || data.filters.speed[1] !== 100) {
          filteredList = filteredList.filter((elm) => {
            return (
              elm.powerstats.speed >= data.filters.speed[0] &&
              elm.powerstats.speed <= data.filters.speed[1]
            );
          });
        }
      }

      if (data.filters.powerstats.includes('durability')) {
        if (
          data.filters.durability[0] !== 0 ||
          data.filters.durability[1] !== 100
        ) {
          filteredList = filteredList.filter((elm) => {
            return (
              elm.powerstats.durability >= data.filters.durability[0] &&
              elm.powerstats.durability <= data.filters.durability[1]
            );
          });
        }
      }

      if (data.filters.powerstats.includes('combat')) {
        if (data.filters.combat[0] !== 0 || data.filters.combat[1] !== 100) {
          filteredList = filteredList.filter((elm) => {
            return (
              elm.powerstats.combat >= data.filters.combat[0] &&
              elm.powerstats.combat <= data.filters.combat[1]
            );
          });
        }
      }

      //console.log(filteredList);
      state.superheroes = filteredList;
      state.filters = data.filters;
    },
  },
});

export const {filterBy} = filters.actions;
export default filters.reducer;
