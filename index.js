const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

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
