import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterState {
  year: string;
  type: string;
}

const initialState: FilterState = {
  year: '',
  type: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setYear(state, action) {
      state.year = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    resetFilters(state) {
      state.year = '';
      state.type = '';
    },
  },
});

export const { setYear, setType, resetFilters } = filterSlice.actions;
export const selectYear = (state: RootState) => state.filter.year;
export const selectType = (state: RootState) => state.filter.type;
export default filterSlice.reducer;