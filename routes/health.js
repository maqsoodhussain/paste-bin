const express = require('express')
const connectDB = require('../config/db');

const router = express.Router();

router.get('/healthz', async (req, res) => {
  try {
    await connectDB(process.env.MONGODB_URI);

    const isDbConnected = mongoose.connection.readyState === 1;
    res.status(isDbConnected ? 200 : 500).json({ ok: isDbConnected });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

module.exports = router;
