const express = require("express");
const { User, generateToken } = require("../models/userModel");
const router = express.Router();
// const User = require("../models/userModel");

// user registration route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({ name, password, email });
    await user.save();

    const token = generateToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
});

// user login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exist
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      const token = generateToken(user);

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      res.json({ token });
    }

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
