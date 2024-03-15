const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB at ${MONGODB_URI}`))
  .catch((err) => console.log(`Could not connect to MongoDB`, err));

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
