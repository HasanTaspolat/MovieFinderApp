import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchMovies, selectMovies } from '../redux/slices/moviesSlice';
import { selectSearchTerm } from '../redux/slices/searchSlice';
import { selectYear } from '../redux/slices/filterSlice';
import { selectPage } from '../redux/slices/paginationSlice';

export function useFetchMovies() {
  const dispatch = useDispatch<AppDispatch>();

  // Local loading state to manage loading manually
  const [loading, setLoading] = useState(false);

  const searchTerm = useSelector(selectSearchTerm);
  const year = useSelector(selectYear);
  const page = useSelector(selectPage);
  const movies = useSelector(selectMovies);

  useEffect(() => {
    // Set loading to true before dispatching the action
    setLoading(true);

    // Dispatch fetchMovies and handle loading state manually
    dispatch(fetchMovies({ searchTerm, year, page }))
      .unwrap() // Ensures we can use .then/.catch for async actions
      .then(() => setLoading(false)) // Set loading to false on success
      .catch(() => setLoading(false)); // Set loading to false on failure
  }, [dispatch, searchTerm, year, page]);

  return { movies, loading };
}