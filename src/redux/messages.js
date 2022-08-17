import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import data from '../data.json';

export const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    chat: localStorage.getItem('chatty')
      ? JSON.parse(localStorage.getItem('chatty'))
      : data,
  },
  reducers: {
    addMessage(state, action) {
      const arrMessages = state.chat;
      const indx = arrMessages.findIndex(
        el => el.id === action.payload.contactId,
      );
      arrMessages[indx].messages.push(action.payload);

      localStorage.setItem('chatty', JSON.stringify(arrMessages));
    },
  },
});

export const { addMessage } = messageSlice.actions;

// export const messagesApi = createApi({
//   reducerPath: 'messages',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://chatty-man.herokuapp.com/api',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().authUser.token;
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Messages'],
//   endpoints: builder => ({
//     getAll: builder.query({
//       query: () => ({
//         url: `/messages/`,
//       }),
//       providesTags: ['Messages'],
//     }),
//     add: builder.mutation({
//       query: value => ({
//         url: '/messages/',
//         method: 'POST',
//         body: value,
//       }),
//       invalidatesTags: ['Messages'],
//     }),
//   }),
// });
// export const { useGetAllQuery, useAddMutation } = messagesApi;
