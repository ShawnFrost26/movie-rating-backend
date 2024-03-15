const authService = require("../services/authServices");

const register = async (req, res) => {
  try {
    const userData = req.body;

    const user = await authService.registerUser(userData);

    res
      .status(201)
      .json({ message: "User registered successfully", userId: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
};
