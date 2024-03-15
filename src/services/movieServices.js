const Movie = require("../models/Movie");

const createMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);

    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw error;
  }
};

const getMovieById = async (id) => {
  try {
    const movie = await Movie.findById(id);
    return movie;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (id, updatedData) => {
  try {
    const movie = Movie.findByIdAndUpdate(
      { _id: id },
      { $set: updatedData },
      { new: true }
    );
    return movie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (id) => {
  try {
    const movie = Movie.findByIdAndDelete(id);
    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
