import { createApi } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import { axiosBaseQuery } from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery({
    // baseUrl: 'https://chatty-man.herokuapp.com/api',
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: email => ({
        url: `/users/google-user/${email}`,
        method: 'GET',
      }),
      providesTags: ['Auth'],
    }),
    logout: builder.query({
      query: () => ({
        url: '/users/logout',
        method: 'GET',
      }),
      providesTags: ['Auth'],
    }),
  }),
});

export const { useGetUserQuery, useLogoutQuery } = authApi;

export const authSlice = createSlice({
  name: 'authUser',
  initialState: {
    name: '',
    email: '',
    messages: [],
    isLogged: null,
    tokken: null,
  },
  reducers: {
    setUser(state, action) {
      // const { name, value } = action.payload;
      // state[name] = value;
      state.isLogged = true;
    },
  },
});

export const { setUser } = authSlice.actions;
