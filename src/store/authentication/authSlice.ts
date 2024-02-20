import { createSlice } from '@reduxjs/toolkit';

interface AuthSliceProps {
  user: null | string;
  token: null | string;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: AuthSliceProps = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
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
export const { setUser, setToken, setAuth, setLoading, setLogOut } = authSlice.actions;
export default authSlice.reducer;
