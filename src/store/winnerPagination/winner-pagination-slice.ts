import { createSlice } from '@reduxjs/toolkit';
import { DECREMENT, INCREMENT } from '../../constants/index.ts';

interface WinnerPaginationState {
  currentPage: number;
}

const initialState: WinnerPaginationState = {
  currentPage: 1,
};

const winnerPaginationSlice = createSlice({
  name: 'winnerPagination',
  initialState,
  reducers: {
    nextPageWinners: (state) => {
      return { ...state, currentPage: state.currentPage + INCREMENT };
    },
    prevPageWinners: (state) => {
      return {
        ...state,
        currentPage: Math.max(INCREMENT, state.currentPage - DECREMENT),
      };
    },
  },
});

export const { nextPageWinners, prevPageWinners } =
  winnerPaginationSlice.actions;
export default winnerPaginationSlice.reducer;
