import useMovieContext from "../api/context/useMovieContext";
import MovieList from "../components/MovieList";
import MovieModal from "../components/MovieModal";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { movies, selectedMovie } = useMovieContext();

  return (
    <div className="min-h-screen text-white bg-black">
      <SearchBar />
      {movies.length > 0 ? (
        <MovieList />
      ) : (
        <p className="text-center text-gray-500 lg:text-2xl">
          No Movies found.
        </p>
      )}
      {/*  */}
      {selectedMovie && <MovieModal />}
    </div>
  );
};

export default Home;
