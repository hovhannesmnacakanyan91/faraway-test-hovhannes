import { createSlice } from '@reduxjs/toolkit';
import { initialGlobalState } from './initialGlobalState';

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    getPeople: (state, action) => {
      state.people = action.payload;
    },
    getPerson: (state, action) => {
      state.person = action.payload;
    },
  },
});
