const API_KEY = "720d589a66f56d0458b9e5729c82da42";

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
