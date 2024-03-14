const movieService = require("../services/movieServices");

const createMovie = async (req, res) => {
  try {
    const { title, director, genre, releaseYear, description } = req.body;

    const movie = await movieService.createMovie({
      title,
      director,
      genre,
      releaseYear,
      description,
    });
    console.log("Inside Controller::Movie Created", movie);

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await movieService.getMovieById(id);
    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMovieById,
  createMovie,
  getAllMovies,
};
