import { createSlice } from '@reduxjs/toolkit';

export const currentChatSlice = createSlice({
  name: 'currentChat',
  initialState: {},
  reducers: {
    setCurrentChat(state, action) {
      state.current = action.payload;
    },
  },
});

export const { setCurrentChat } = currentChatSlice.actions;
