// src/services/moviesService.ts
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

interface FetchMoviesParams {
  searchTerm?: string;
  type?: 'movie' | 'series' | 'episode';
  year?: string;
  page?: number;
}

export async function fetchMoviesFromAPI({
  searchTerm = 'Pokemon',
  type,
  year,
  page = 1,
}: FetchMoviesParams) {
  const params = new URLSearchParams({
    s: searchTerm,
    apikey: API_KEY!,
    ...(type && { type }),
    ...(year && { y: year }),
    ...(page && { page: page.toString() }),
  });

  const response = await axios.get(`${BASE_URL}?${params.toString()}`);
  return response.data.Search || [];
}