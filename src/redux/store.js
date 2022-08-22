import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactApi';
import { filterContactSlice } from './filterContactSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterContactSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
