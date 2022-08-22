import { createSlice } from '@reduxjs/toolkit';

export const filterContactSlice = createSlice({
  name: 'filter',
  initialState: {filterInput: '',},
  reducers: {
    setFilter: (state, action) => {
      state.filterInput = action.payload;
    },
  },
});


export const { setFilter } = filterContactSlice.actions;

export const getFilter = (state) => state.filter.filterInput;