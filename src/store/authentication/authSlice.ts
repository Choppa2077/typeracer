import { createSlice } from '@reduxjs/toolkit';

interface AuthSliceProps {
  username: null | string;
  token: null | string;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: AuthSliceProps = {
  username: null,
  token: null,
  isAuth: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogOut: (state) =>{
      state.token = null
    }
  },
});

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//     },
//     logOut: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setCredentials, logOut } = authSlice.actions;
export const { setUsername, setToken, setAuth, setLoading, setLogOut } = authSlice.actions;
export default authSlice.reducer;
