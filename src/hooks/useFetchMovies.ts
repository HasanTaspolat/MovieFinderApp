import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchMovies, selectMovies } from '../redux/slices/moviesSlice';
import { selectSearchTerm } from '../redux/slices/searchSlice';
import { selectYear } from '../redux/slices/filterSlice';
import { selectPage } from '../redux/slices/paginationSlice';

export function useFetchMovies() {
  const dispatch = useDispatch<AppDispatch>();

  const searchTerm = useSelector(selectSearchTerm);
  const year = useSelector(selectYear);
  const page = useSelector(selectPage);
  const movies = useSelector(selectMovies);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') return; // Prevent empty search

    setLoading(true);
    dispatch(fetchMovies({ searchTerm, year, page }))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, searchTerm, year, page]);

  return { movies, loading };
}
