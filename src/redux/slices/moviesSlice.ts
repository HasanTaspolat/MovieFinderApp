import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchMoviesFromAPI } from '../../services/fetchMovies';

interface FetchMoviesParams {
  searchTerm?: string;
  year?: string;
  page?: number;
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (params: FetchMoviesParams) => {
    return await fetchMoviesFromAPI(params);
  }
);

interface MoviesState {
  list: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  list: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        console.log("Fetch movies pending...");
        state.loading = true;
        state.error = null;
        console.log(state.loading)
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log("Fetch movies fulfilled...");
        state.loading = false;
        console.log(state.loading)
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        console.log("Fetch movies rejected...");
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export const selectMovies = (state: RootState) => state.movies.list;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;
export default moviesSlice.reducer;