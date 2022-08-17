import { createSlice } from '@reduxjs/toolkit';

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
