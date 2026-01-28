const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const healthRoute = require('./routes/health');
// const pasteRoutes = require('./routes/pastes');



dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */

// Parse JSON bodies
app.use(express.json());

// Set EJS as view engine
app.set('view engine', 'ejs');
 
app.get('/',(req,res)=>{
  res.send(" ✅ working")
})


// Routes
app.use('/api', healthRoute);
// app.use('/api', pasteRoutes);



/* ---------- DATABASE CONNECTION ---------- */

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = app;
