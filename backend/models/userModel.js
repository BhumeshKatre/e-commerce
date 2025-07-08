const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const  bcrypt =require("bcryptjs");

// declare userSchema  
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
// Generate Token 
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
// Verify Token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (err) {
    console.error("Hashing error:", err);
    return null; 
  }
}

const verifyPassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("Password match:", isMatch);
    return isMatch;
  } catch (err) {
    console.error("Password verification error:", err);
    return false; 
  }
}

// export all modules 
module.exports = { User, generateToken, verifyToken, hashPassword , verifyPassword};
