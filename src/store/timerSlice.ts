import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface TimerState {
  timer: number;
  raceTimer: number;
}

const initialState: TimerState = {
  timer: 3,
  raceTimer: 110,
};

const startTimersAsync = createAsyncThunk(
  'timers/startTimers',
  async (_, { getState, dispatch }) => {
    const interval = setInterval(() => {
      dispatch(timerSlice.actions.decrementTimer());

      const state = getState() as TimerState;

      // Cleanup the initial timer interval when it reaches 0
      if (state.timer === 0) {
        clearInterval(interval);

        // Start the race timer
        const raceInterval = setInterval(() => {
          dispatch(timerSlice.actions.decrementRaceTimer());

          const updatedState = getState() as TimerState;

          // Stop the race timer when it reaches 0
          if (updatedState.raceTimer === 0) {
            clearInterval(raceInterval);
          }
        }, 1000);

        // Cleanup the race timer interval when it reaches 0
        return () => clearInterval(raceInterval);
      }
    }, 1000);

    // Cleanup the initial timer interval when the component unmounts
    return () => clearInterval(interval);
  },
);

const timerSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    decrementTimer: (state: TimerState) => {
      state.timer -= 1;
    },
    decrementRaceTimer: (state: TimerState) => {
      state.raceTimer -= 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(startTimersAsync.fulfilled, () => {});
  },
});

export const { reducer: timerReducer, actions } = timerSlice; // Use `reducer` property
export const { decrementTimer, decrementRaceTimer } = actions; // Extract actions
export { startTimersAsync }; // Export the asynchronous thunk
export default timerReducer; // Export the reducer for combining
