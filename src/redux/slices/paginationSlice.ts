import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { initialState } from '../../types';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export const selectPage = (state: RootState) => state.pagination.page;
export default paginationSlice.reducer;