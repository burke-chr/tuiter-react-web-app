import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "Christopher Burke",
  "handle": "@chris123",
  "image": "cb.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Myself",
  "time": "1m",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;