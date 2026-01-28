const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../config/db'); // import the connection logic

const router = express.Router();

router.get('/healthz', async (req, res) => {
  try {
    await connectDB(process.env.MONGODB_URI); // ensure connection

    const isDbConnected = mongoose.connection && mongoose.connection.readyState === 1;

    return res.status(isDbConnected ? 200 : 500).json({ ok: isDbConnected });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

module.exports = router;
