import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: [],
  gender: [],
  alignment: [],
  intelligence: [0, 100],
  strength: [0, 100],
  speed: [0, 100],
  durability: [0, 100],
  power: [0, 100],
  combat: [0, 100],
};
const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterByName: (superheroes, value) => {
      superheroes.filter((str) => {
        return str.name.includes(value);
      });
    },
    filterByGender: (superheroes, value) => {
      superheroes.filter((str) => {
        return str.gender.includes(value);
      });
    },
    filterByAlignment: (superheroes, value) => {
      superheroes.filter((str) => {
        return str.alignment.includes(value);
      });
    },
    filterByIntelligence: (superheroes, value) => {
      superheroes.filter((str) => {
        return (
          str.powerstats.intelligence >= value.min &&
          str.powerstats.intelligence <= value.max
        );
      });
    },
    filterBySpeed: (superheroes, value) => {
      superheroes.filter((str) => {
        return (
          str.powerstats.speed >= value.min && str.powerstats.speed <= value.max
        );
      });
    },
    filterByStrength: (superheroes, value) => {
      superheroes.filter((str) => {
        return (
          str.powerstats.strength >= value.min &&
          str.powerstats.strength <= value.max
        );
      });
    },
    filterByDurability: (superheroes, value) => {
      superheroes.filter((str) => {
        return (
          str.powerstats.durability >= value.min &&
          str.powerstats.durability <= value.max
        );
      });
    },
    filterByPower: (superheroes, value) => {
      superheroes.filter((str) => {
        return (
          str.powerstats.power >= value.min && str.powerstats.power <= value.max
        );
      });
    },
    filterByCombat: (superheroes, value) => {
      superheroes.filter((str) => {
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
