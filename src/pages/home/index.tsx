import React from 'react';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import ImgMediaCard from '../../views/homepage/movieCard';
import NotFound from '../../components/notFound';
import SkeletonLoader from '../../views/homepage/loadingSkeleton';
import SearchBar from '../../views/homepage/searchBar';
import '../../styles/css/main.css';

export default function MainPage() {
  const { movies, loading } = useFetchMovies();

  return (
    <div>
      <SearchBar />
      
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
    </div>
  );
}
