import { Reducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: Reducer(),
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
