import { useSelector } from 'react-redux';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import ImgMediaCard from '../../views/homepage/movieCard';
import NotFound from '../../components/notFound';
import SkeletonLoader from '../../views/homepage/loadingSkeleton';
import SearchBar from '../../views/homepage/searchBar';
import PaginationComponent from '../../views/homepage/pagination';
import { selectTotalResults, selectTotalPages, selectMoviesLoading } from '../../redux/slices/moviesSlice';
import '../../styles/css/main.css';
import Filters from '../../views/homepage/filters';

export default function MainPage() {
  const { movies } = useFetchMovies();
  const loading = useSelector(selectMoviesLoading);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages);

  return (
    <div className='centered-item'>
      <SearchBar />

      {totalResults > 0 && (
        <div className='container filters'>
          <p>{`${totalResults} results found across ${totalPages} pages`}</p>
          <Filters/>
        </div>
      )}

      {loading ? (
        <SkeletonLoader />
      ) : movies.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid-container container">
          {movies.map((movie) => (
            <ImgMediaCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} description={movie.Year} image={movie.Poster} />
          ))}
        </div>
      )}

      {totalPages > 1 && <PaginationComponent />}
    </div>
  );
}
