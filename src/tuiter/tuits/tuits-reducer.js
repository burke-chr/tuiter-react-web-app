import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
  updateTuitThunk,
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk
} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}
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
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state) => {
          state.loading = false
        },
    [deleteTuitThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          state.tuits = state.tuits.filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          const tuitIndex = state.tuits.findIndex((t) => t._id === payload._id)
          state.tuits[tuitIndex] = {
            ...state.tuits[tuitIndex], ...payload
          }
        }
  },
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