import { useState } from "react";
import useMovieContext from "../api/context/useMovieContext";

const SearchBar = () => {
  const { searchMovie } = useMovieContext();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovie(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4 p-5">
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        value={query}
        placeholder="write your film here.."
        className="p-2 text-black lg:w-1/2 sm:w-full rounded-xl"
      />
      <button className="px-4 py-2 bg-red-600 rounded-xl" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
