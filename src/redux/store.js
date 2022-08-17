import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter';
import { currentChatSlice } from './currentChat';
import { authApi, authSlice } from './auth';
import { chuckApi } from './chuck';
import { messageSlice } from './messages';

export const store = configureStore({
  reducer: {
    [chuckApi.reducerPath]: chuckApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [currentChatSlice.name]: currentChatSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [messageSlice.name]: messageSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    chuckApi.middleware,
  ],
  devToolsls: process.env.NODE_ENV !== 'production',
});
