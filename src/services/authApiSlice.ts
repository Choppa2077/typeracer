import { apiSlice } from './apiSlice';

interface LoginCredentials {
  email: string;
  password: string;
  fingerprint: string | undefined;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
  fingerprint: string | undefined;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AuthResponse, SignUpCredentials>({
      query: (credentials) => ({
        url: '/api/auth/sign-up',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    login: build.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/api/auth/sign-in',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/api/auth/logout',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useLogoutMutation } =
  authApiSlice;
