const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieControllers");

router.post("/", movieController.createMovie);

router.get("/", movieController.getAllMovies)

module.exports = router;
