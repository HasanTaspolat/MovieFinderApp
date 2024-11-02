import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchMovies, selectMovies , selectMoviesLoading } from '../redux/slices/moviesSlice';
import { selectSearchTerm } from '../redux/slices/searchSlice';
import { selectYear } from '../redux/slices/filterSlice';
import { selectPage } from '../redux/slices/paginationSlice';

export function useFetchMovies() {
  const dispatch = useDispatch<AppDispatch>();

  const searchTerm = useSelector(selectSearchTerm);
  const year = useSelector(selectYear);
  const page = useSelector(selectPage);
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectMoviesLoading);

  useEffect(() => {
    dispatch(fetchMovies({ searchTerm, year, page }));
  }, [dispatch, searchTerm, year, page]);

  return { movies, loading };
}