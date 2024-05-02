import { apiSlice } from './apiSlice';

interface LoginCredentials {
  email: string;
  password: string;
  fingerprint: string | undefined;
}

interface LoginResponse {
  access: string | undefined;
  avatar: string | undefined;
  username: string| undefined;
}


interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
  fingerprint: string | undefined;
}

interface SignUpResponse {
  access: string | undefined;
  avatar: string | undefined;
}


export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<SignUpResponse, SignUpCredentials>({
      query: (credentials) => ({
        url: '/api/auth/sign-up',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    login: build.mutation<LoginResponse, LoginCredentials>({
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
