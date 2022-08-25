import { createSlice } from '@reduxjs/toolkit';
import { initialGlobalState } from './initialGlobalState';

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    getPeople: (state, action) => {
      state.people = action.payload;
    },
  },
});
