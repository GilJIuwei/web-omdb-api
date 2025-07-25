import type { Movie } from "../api/context/MovieContext";
import useMovieContext from "../api/context/useMovieContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, movieDetail } = useMovieContext();

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-5">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => movieDetail(movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;
