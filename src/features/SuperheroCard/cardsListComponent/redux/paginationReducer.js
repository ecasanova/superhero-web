import {createSlice} from '@reduxjs/toolkit';

const initialState = {page: 0};
const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page++;
    },
  },
});

export const {nextPage, prevPage} = pagination.actions;
export default pagination.reducer;
