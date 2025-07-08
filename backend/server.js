const express = require("express");
const dbConn = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/users.routes");
var cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;

// database config
dbConn();

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user route
app.use("/api/users", userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});