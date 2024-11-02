// src/redux/slices/moviesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchMoviesFromAPI } from '../../services/fetchMovies';

interface FetchMoviesParams {
  searchTerm?: string;
  type?: string;
  year?: string;
  page?: number;
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (params: FetchMoviesParams) => {
    const response = await fetchMoviesFromAPI(params);
    return response;
  }
);

interface MoviesState {
  list: Array<any>;
  loading: boolean;
  error: string | null;
  totalResults: number;
  totalPages: number;
}

const initialState: MoviesState = {
  list: [],
  loading: false,
  error: null,
  totalResults: 0,
  totalPages: 0,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.Search) {
          state.list = action.payload.Search;
          state.totalResults = parseInt(action.payload.totalResults, 10) || 0;
          state.totalPages = Math.ceil(state.totalResults / 10);
        } else {
          state.list = [];
          state.totalResults = 0;
          state.totalPages = 0;
          state.error = 'Unexpected response structure';
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export const selectMovies = (state: RootState) => state.movies.list;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;
export const selectTotalResults = (state: RootState) => state.movies.totalResults;
export const selectTotalPages = (state: RootState) => state.movies.totalPages;

export default moviesSlice.reducer;
