import { combineReducers } from '@reduxjs/toolkit';
// import { singleRaceApi } from '../services/singleRaceApi';
import { progressSlice } from './progressSlice';
import { apiSlice } from '../services/apiSlice';
import authReducer from './authentication/authSlice';


export const rootReducer = combineReducers({
    // [singleRaceApi.reducerPath]: singleRaceApi.reducer,
    race: progressSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
  });