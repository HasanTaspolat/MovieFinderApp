import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterState {
  year: string;
}

const initialState: FilterState = {
  year: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const { setYear } = filterSlice.actions;
export const selectYear = (state: RootState) => state.filter.year;
export default filterSlice.reducer;