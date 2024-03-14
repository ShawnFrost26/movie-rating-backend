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

module.exports = {
  createMovie,
};
