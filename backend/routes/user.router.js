const express = require("express");
const router = express.Router();
const User = require("../models/userModel");


// user post route
router.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });

    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  user get route 
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users)
  
 } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

module.exports = router;
