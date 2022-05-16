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
        source: "/api/movie/:movie_id",
        destination: `https://api.themoviedb.org/3/movie/:movie_id?api_key=${API_KEY}`,
      },
    ];
  },
};
