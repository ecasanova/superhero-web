import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const myTeamSlice = createSlice({
  name: 'myteam',
  initialState,
  reducers: {
    add: (myteam, action) => {
      myteam.push(action.payload);
    },
    remove: (myteam, action) => {
      myteam.splice(
        myteam.findIndex((superheroe) => superheroe.id === action.payload.id),
        1,
      );
    },
  },
});

export const {add, remove} = myTeamSlice.actions;
export default myTeamSlice.reducer;
