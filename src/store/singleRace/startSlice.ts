import { createSlice } from '@reduxjs/toolkit';
import { StartSingleRaceResponse } from '../../services/startSingleApiSlice';

const initialState: StartSingleRaceResponse = {
  content: null,
  length: null,
  text_author: null,
  contributor_name: null,
  racer_name: null,
  avatar: null,
  id: null,
};

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    setRacerId:(state, action) => {

    }
  }
});
