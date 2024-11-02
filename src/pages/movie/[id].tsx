import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Container } from '@mui/material';
import { MovieDetails } from '../../types';
import MovieDetailSkeleton from '../../views/movie/skeletonLoader';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
      const BASE_URL = 'https://www.omdbapi.com/';
      try {
        const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <MovieDetailSkeleton />;

  return (
    <Container maxWidth="md" className="movie-detail">
      <Typography variant="h4" className="movie-title">{movie?.Title}</Typography>
      <img src={movie?.Poster} alt={movie?.Title} className="movie-poster" />
      <Box className="movie-details">
        <Typography className="detail-item"><strong>Year:</strong> {movie?.Year}</Typography>
        <Typography className="detail-item"><strong>Runtime:</strong> {movie?.Runtime}</Typography>
        <Typography className="detail-item"><strong>Genre:</strong> {movie?.Genre}</Typography>
        <Typography className="detail-item"><strong>Director:</strong> {movie?.Director}</Typography>
        <Typography className="detail-item"><strong>Actors:</strong> {movie?.Actors}</Typography>
        <Typography className="detail-item"><strong>IMDb Rating:</strong> {movie?.imdbRating}</Typography>
        <Typography className="movie-plot">{movie?.Plot}</Typography>
      </Box>
    </Container>
  );
}