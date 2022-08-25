import { combineReducers } from '@reduxjs/toolkit';
import { globalSlice } from './global/globalSlice';

export const Reducer = () =>
  combineReducers({
    global: globalSlice.reducer,
  });
