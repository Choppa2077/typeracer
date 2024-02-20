import { apiSlice } from './apiSlice';

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
  fingerPrint: string | undefined;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AuthResponse, SignUpCredentials>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: {...credentials},
      }),
    }),
    login: build.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: {...credentials},
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useLogoutMutation } = authApiSlice;
