const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/top_rated",
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
      },
      {
        source: "/api/now_playing",
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      },
      {
        source: "/api/upcoming",
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:movie_id",
        destination: `https://api.themoviedb.org/3/movie/:movie_id?api_key=${API_KEY}`,
      },
    ];
  },
};
