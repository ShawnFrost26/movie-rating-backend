const Movie = require("../models/Movie");

const createMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);

    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
};
