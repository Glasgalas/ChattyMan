import { configureStore } from '@reduxjs/toolkit';
// import { productsApi } from './productSlice';
import { filterSlice } from './filter';
import { currentChatSlice } from './currentChat';
// import { cartSlice } from './cartSlice';
// import { ordersApi, formSlice } from './formSlice';
import { authApi, authSlice } from './auth';

export const store = configureStore({
  reducer: {
    // [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [currentChatSlice.name]: currentChatSlice.reducer,
    // [cartSlice.name]: cartSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    // ordersApi.middleware,
  ],
  devToolsls: process.env.NODE_ENV !== 'production',
});
