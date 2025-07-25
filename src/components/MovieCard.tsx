type MovieCardProps = {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
  onClick: () => void;
};

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div
      onClick={onClick}
      className="p-4 text-center bg-gray-900 rounded-lg shadow-md cursor-pointer"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full rounded-lg h-96 sm:h-60"
      />
      <h3 className="mt-2 text-lg text-white lg:font-semibold sm:font-medium lg:text-xl sm:text-sm">
        {movie.Title}
      </h3>

      <p className="text-gray-400 lg:text-lg">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
