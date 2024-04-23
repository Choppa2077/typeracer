import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import {
  setAuth,
  setLoading,
  setLogOut,
  setToken,
} from '../store/authentication/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:1001',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.token;
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      headers.set('Authorization', `${token}`);
    }

    return headers;
  },
});

// export const checkAuth = async (args, api, extraOptions) => {
//   const dispatch = useDispatch();
//   dispatch(setLoading(true));
//   try {
//     const result = await baseQuery('/refresh', api, extraOptions);
//     dispatch(setAuth(true));
//     dispatch(setToken(result.data));
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      '/api/auth/refresh',
      api,
      extraOptions,
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setToken(refreshResult.data));
      // retry the  original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogOut());
    }
  }
  // const isAuthenticated = api.getState().auth.token !== undefined;
  // if (!isAuthenticated) {
  //   // Handle unauthenticated state, e.g., redirect to login
  //   console.log('User is not authenticated');
  //   api.dispatch(setLogOut());
  // }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
