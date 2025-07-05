const BASE_URL = "https://api.tvmaze.com";

// Get popular shows (TVmaze doesn’t have a “popular” endpoint, so we’ll use "shows")
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/shows`);
  const data = await response.json();
  return data; // No 'results' array here
};

// Search for shows (TVmaze uses 'search/shows')
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  // The results are in objects with a 'show' key
  return data.map(result => result.show);
};
