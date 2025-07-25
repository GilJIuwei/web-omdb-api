import useMovieContext from "../api/context/useMovieContext";

const MovieModal = () => {
  const { selectedMovie, closeMovie } = useMovieContext();
  if (!selectedMovie) return null; // double checking

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="w-full max-w-lg p-6 text-white bg-gray-800 rounded-lg">
        <img
          className="object-fill w-full max-h-full mb-4 rounded-lg h-96"
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
        />
        <h2 className="text-2xl font-bold b-4">{selectedMovie.Title}</h2>
        <p className="mb-2 text-sm ">
          <strong>Release: </strong>
          {selectedMovie.Released}
        </p>
        <p className="mb-2 text-sm ">
          <strong>Genre: </strong>
          {selectedMovie.Genre}
        </p>
        <p className="mb-2 text-sm ">
          <strong>Director: </strong>
          {selectedMovie.Director}
        </p>
        <p className="mb-2 text-sm ">
          <strong>Actors: </strong>
          {selectedMovie.Actors}
        </p>
        <p className="mb-2 text-sm ">
          <strong>IMDB Rating: </strong>
          {selectedMovie.imdbRating}
        </p>
        <p className="mb-2 text-sm ">
          <strong>Plot: </strong>
          {selectedMovie.Plot}
        </p>
        <button
          onClick={closeMovie}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
