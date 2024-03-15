const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/getsomedata", authenticateToken, authController.someData);

module.exports = router;
