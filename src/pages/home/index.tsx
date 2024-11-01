import React from 'react';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import ImgMediaCard from '../../views/homepage/movieCard';
import '../../styles/css/main.css';
import SkeletonLoader from '../../views/homepage/loadingSkeleton';

export default function MainPage() {
  const { movies, loading } = useFetchMovies();
    
  if (loading) return <SkeletonLoader/>;
    
  return (
    <div className='grid-container container'>
      {movies.map((movie) => (
        <ImgMediaCard key={movie.imdbID} title={movie.Title} description={movie.Year} image={movie.Poster} />
      ))}
    </div>
  );
}
