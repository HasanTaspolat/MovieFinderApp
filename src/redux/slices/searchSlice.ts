import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: 'Pokemon',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export default searchSlice.reducer;