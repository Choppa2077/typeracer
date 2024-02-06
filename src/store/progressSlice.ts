import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProgress {
  progress: number;
  previousProgress: number; // Add previousProgress to the state
  marginForDrive: number;
  userInput: string;
  text: string | undefined;
  notCorrectTypeCount: number;
}

const initialState: IProgress = {
  progress: 0,
  previousProgress: 0, // Initialize previousProgress
  marginForDrive: 0,
  userInput: '',
  text: undefined,
  notCorrectTypeCount: 0,
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
    setNotCorrectTypeCount: (state: IProgress, action: PayloadAction<number>) => {
      state.notCorrectTypeCount = action.payload;
    },
  },
});

export const { setUserInput, setProgress, setText, setNotCorrectTypeCount } =
  progressSlice.actions;
export const progressReducer = progressSlice.reducer;
