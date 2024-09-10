const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  stockSymbol: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
