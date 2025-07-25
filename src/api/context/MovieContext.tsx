import { createContext, useState } from "react";
import { getMovieDetails, searchMovies } from "../omdbAPI";

export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

interface MovieDetail extends Movie {
  Plot: string;
  Genre: string;
  Director: string;
  Released: string;
  Actors: string;
  imdbRating: string;
}

interface MovieContextType {
  // state 1
  movies: Movie[];
  // state 2
  selectedMovie: MovieDetail | null;
  searchMovie: (query: string) => Promise<void>;
  movieDetail: (id: string) => Promise<void>;
  closeMovie: () => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

type MovieProviderProps = {
  children: React.ReactNode;
};

const MovieProvider = ({ children }: MovieProviderProps) => {
  //
  const [movies, setMovies] = useState<Movie[]>([]);
  //
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null);
  //
  const searchMovieHandler = async (query: string) => {
    const result = await searchMovies(query);

    setMovies(result || []);
  };
  //
  const movieDetailsHandler = async (id: string) => {
    const movieDetails = await getMovieDetails(id);
    setSelectedMovie(movieDetails);
  };

  const closeMovieHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        searchMovie: searchMovieHandler,
        movieDetail: movieDetailsHandler,
        closeMovie: closeMovieHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export { MovieContext, MovieProvider };
