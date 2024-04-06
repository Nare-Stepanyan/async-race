import { configureStore } from '@reduxjs/toolkit';
import carReducer from './cars/car-slice.ts';
import carPaginationReducer from './carPagination/car-pagination-slice.ts';
import winnerPaginationReducer from './winnerPagination/winner-pagination-slice.ts';

export const store = configureStore({
  reducer: {
    car: carReducer,
    carPagination: carPaginationReducer,
    winnerPagination: winnerPaginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
