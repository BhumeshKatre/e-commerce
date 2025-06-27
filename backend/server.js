const express = require('express');
const dbConn = require('./config/db');
const cors = require('cors')
const userRoutes = require('./routes/user.router')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;

// database config 
dbConn();

// middlewares
app.use(cors())
app.use(express.json());


// user route 
app.use('/api/users', userRoutes);

// sample route 
app.get('/', (req, res) => {
  res.send('welcome on server/ backend page ');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


