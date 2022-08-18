import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://chatty-man.herokuapp.com/api',
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getUser: builder.query({
      query: email => ({
        url: `/users/google-user/${email}`,
      }),
      providesTags: ['Auth'],
    }),
    logout: builder.query({
      query: () => ({
        url: '/users/logout',
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
    avatar: '',
    isLogged: null,
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.avatar = action.payload.avatar;
      state.isLogged = true;
    },
  },
});

export const { setUser } = authSlice.actions;
