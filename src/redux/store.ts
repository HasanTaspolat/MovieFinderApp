import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import filterReducer from './slices/filterSlice';
import searchReducer from './slices/searchSlice';
import paginationReducer from './slices/paginationSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filter: filterReducer,
    search: searchReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;