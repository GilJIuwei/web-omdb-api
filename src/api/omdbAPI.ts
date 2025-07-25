const API_KEY = "584f3741";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);

  const data = await response.json();

  return data.Search;
};

export const getMovieDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);

  const data = await response.json();

  return data;
};
