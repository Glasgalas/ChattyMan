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
      if (action.payload.isFrom) {
        arrMessages[indx].pushed += 1;
      }

      localStorage.setItem('chatty', JSON.stringify(arrMessages));
    },
    clearPushed(state, action) {
      const arrMessages = state.chat;
      const indx = arrMessages.findIndex(
        el => el.id === action.payload.contactId,
      );
      arrMessages[indx].pushed = 0;

      localStorage.setItem('chatty', JSON.stringify(arrMessages));
    },
  },
});

export const { addMessage, clearPushed } = messageSlice.actions;
