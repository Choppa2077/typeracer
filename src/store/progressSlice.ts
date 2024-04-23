import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProgress {
  progress: number;
  previousProgress: number; // Add previousProgress to the state
  marginForDrive: number;
  userInput: string;
  text: string | undefined;
  errorCount: number;
  errorIndexes: { [key: number]: boolean }; // Map for errors
}

const initialState: IProgress = {
  progress: 0,
  previousProgress: 0, // Initialize previousProgress
  marginForDrive: 0,
  userInput: '',
  text: undefined,
  errorCount: 0,
  errorIndexes: {},
};

export const progressSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    setUserInput: (state: IProgress, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
    setProgress: (
      state,
      action: PayloadAction<{ current: number; previous: number }>,
    ) => {
      state.progress = action.payload.current;
      state.previousProgress = action.payload.previous;
    },
    setText: (state: IProgress, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setErrorCount: (state, action) => {
      state.errorCount = action.payload;
    },
    setErrorIndex: (state, action) => {
      const { index, isError } = action.payload;
      if (isError) {
        state.errorIndexes[index] = true;
      } else {
        delete state.errorIndexes[index];
      }
    },
    resetErrors: (state) => {
      state.errorCount = 0;
      state.errorIndexes = {};
    },
  },
});

export const { setUserInput, setProgress, setText, setErrorCount, setErrorIndex, resetErrors } =
  progressSlice.actions;                           
export const progressReducer = progressSlice.reducer;
