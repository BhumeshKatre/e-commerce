const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// user post route
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body.form;

    const user = new User({ name, email, password });

    await user.save();

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    v;
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// login route

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ error: "user Not Found " });
    }

    if (user.password !== password) {
      res.status(4001).json({ error: "invalid credentials" });
    }

    res.json(user); // Can send token later
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  user get route
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

module.exports = router;
