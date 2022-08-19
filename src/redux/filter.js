import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
    clearFilter(state, action) {
      state.value = '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
