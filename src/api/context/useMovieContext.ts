import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const useMovieContext = () => {
  const themeContext = useContext(MovieContext);
  if (themeContext === undefined) {
    throw new Error("error using context");
  }
  return themeContext;
};

export default useMovieContext;
