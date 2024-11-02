
export interface ImgMediaCardProps {
    title: string;
    description: string;
    image: string;
    id: string;
  }
  
  export interface SkeletonLoaderProps {
    count?: number;
  }

  export interface PaginationState {
    page: number;
  }
  
  export const initialState: PaginationState = {
    page: 1,
  };
  
  
  export interface FetchMoviesParams {
    searchTerm?: string;
    type?: string;
    year?: string;
    page?: number;
  }
  export interface MovieDetailProps {
    title: string;
    plot: string;
    director: string;
    actors: string;
    imdbRating: string;
    poster: string;
  }

  export interface MovieDetails {
    Title: string;
    Year: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
  }