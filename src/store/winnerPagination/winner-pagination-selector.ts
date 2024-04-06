import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index.ts';

const itemSelector = (state: RootState) => state.winnerPagination;

export default createSelector(itemSelector, (app) => app.currentPage);
