import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import ImgMediaCard from '../../views/homepage/movieCard';
import NotFound from '../../components/notFound';
import SkeletonLoader from '../../views/homepage/loadingSkeleton';
import SearchBar from '../../views/homepage/searchBar';
import PaginationComponent from '../../views/homepage/pagination';
import { selectTotalResults, selectTotalPages, selectMovies, selectMoviesLoading } from '../../redux/slices/moviesSlice';
import '../../styles/css/main.css';

export default function MainPage() {
  const { movies } = useFetchMovies();
  const loading = useSelector(selectMoviesLoading);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages);

  return (
    <div>
      <SearchBar />

      {totalResults > 0 && (
        <div className='container'>
          <p>{`${totalResults} results found across ${totalPages} pages`}</p>
        </div>
      )}
      
      {loading ? (
        <SkeletonLoader />
      ) : movies.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid-container container">
          {movies.map((movie) => (
            <ImgMediaCard key={movie.imdbID} title={movie.Title} description={movie.Year} image={movie.Poster} />
          ))}
        </div>
      )}

      {totalPages > 1 && <PaginationComponent />}
    </div>
  );
}
