const express = require("express");
const {
  User,
  generateToken,
  hashPassword,
  verifyPassword,
} = require("../models/userModel");
const { protect } = require("../middleware/user.middleware");
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

    // Hash the password
    const hashedPassword = await hashPassword(password);

    const user = new User({ name, password: hashedPassword, email });
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
    console.log(user.password);

    const verifiedPassword = await verifyPassword(password, user?.password);

    if (user && verifiedPassword) {
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

router.get("/me", protect, async (req, res) => {
  res.json(req.user);
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logged out successfully" });
});

router.get("/all-user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error.response?.message);
  }
});

module.exports = router;
