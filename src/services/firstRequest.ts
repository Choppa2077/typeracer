// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// interface SingleRace {
//   racer_id: string;
//   content: string;
//   length: number;
//   text_author: string;
//   contributor_name: string;
//   racer_name: string;
//   avatar: string;
//   id: string;
// }

// interface DataState {
//   result: SingleRace | null;
//   error: string | null;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// }

// export const fetchData = createAsyncThunk<SingleRace, { racer_id: string }>(
//   'data/fetchData',
//   async (postData, { rejectWithValue }) => {
//     try {
//       const response = await fetch('/api/dataEndpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(postData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       return data as SingleRace;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     result: null,
//     error: null,
//     status: 'idle',
//   } as DataState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action: PayloadAction<SingleRace>) => {
//         state.status = 'succeeded';
//         state.result = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action: PayloadAction<string | undefined>) => {
//         state.status = 'failed';
//         state.error = action.payload || 'An error occurred';
//       });
//   },
// });

// export default dataSlice.reducer;
// export { fetchData };
