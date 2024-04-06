import { createSlice } from '@reduxjs/toolkit';
import { DECREMENT, INCREMENT } from '../../constants/index.ts';

interface CarPaginationState {
  currentPage: number;
}

const initialState: CarPaginationState = {
  currentPage: 1,
};

const carPaginationSlice = createSlice({
  name: 'carPagination',
  initialState,
  reducers: {
    nextPageCars: (state) => {
      return { ...state, currentPage: state.currentPage + INCREMENT };
    },
    prevPageCars: (state) => {
      return {
        ...state,
        currentPage: Math.max(INCREMENT, state.currentPage - DECREMENT),
      };
    },
  },
});

export const { nextPageCars, prevPageCars } = carPaginationSlice.actions;
export default carPaginationSlice.reducer;
