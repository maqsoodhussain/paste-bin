const express = require('express');
const mongoose = require('mongoose');
// const connectDB = require('../config/db'); // import the connection logic

const router = express.Router();

router.get('/healthz', async (req, res) => {
  try {
    // Check MongoDB connection state
    const isDbConnected = mongoose.connection.readyState === 1;

    if (!isDbConnected) {
      return res.status(500).json({ ok: false });
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false });
  }
});

router.get("/try",(req,res)=>{
  return res.status(200).json({ ok: true, message: 'wroking' });
})

module.exports = router;
