import {createSlice} from '@reduxjs/toolkit';

const initialState = 0;
const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPage: (page) => {
      page++;
    },
    prevPage: (page) => {
      page--;
    },
  },
});

export const {nextPage, prevPage} = pagination.actions;
export default pagination.reducer;
