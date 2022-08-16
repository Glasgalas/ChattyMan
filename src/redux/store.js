import { configureStore } from '@reduxjs/toolkit';
// import { productsApi } from './productSlice';
import { filterSlice } from './filter';
import { currentChatSlice } from './currentChat';
// import { cartSlice } from './cartSlice';
// import { ordersApi, formSlice } from './formSlice';

export const store = configureStore({
  reducer: {
    // [productsApi.reducerPath]: productsApi.reducer,
    // [ordersApi.reducerPath]: ordersApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [currentChatSlice.name]: currentChatSlice.reducer,
    // [cartSlice.name]: cartSlice.reducer,
    // [formSlice.name]: formSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // productsApi.middleware,
    // ordersApi.middleware,
  ],
  devToolsls: process.env.NODE_ENV !== 'production',
});
