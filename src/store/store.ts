import { configureStore } from '@reduxjs/toolkit';
// import { singleRaceApi } from '../services/singleRaceApi';

import { apiSlice } from '../services/apiSlice';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
    ),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
