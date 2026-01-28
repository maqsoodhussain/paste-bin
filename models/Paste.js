const mongoose = require('mongoose');

const pasteSchema = new mongoose.Schema({
  _id: {
    type: String,           // we will use UUID
    required: true
  },

  content: {
    type: String,
    required: true
  },

  createdAt: {
    type: Number,           // milliseconds since epoch
    required: true
  },

  expiresAt: {
    type: Number,           // null = no expiry
    default: null
  },

  maxViews: {
    type: Number,           // null = unlimited
    default: null
  },

  views: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Paste', pasteSchema);
