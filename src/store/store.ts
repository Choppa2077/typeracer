import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { singleRaceApi } from '../services/singleRaceApi';
import { progressSlice } from './progressSlice';

const rootReducer = combineReducers({
  [singleRaceApi.reducerPath]: singleRaceApi.reducer,
  race: progressSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(singleRaceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
