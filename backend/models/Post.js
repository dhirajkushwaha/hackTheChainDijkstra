// backend/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  heading: { type: String, required: true }, // Post heading
  content: { type: String, required: true }, // Post content
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the post
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who liked the post
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who commented
      content: { type: String, required: true }, // Comment content
      createdAt: { type: Date, default: Date.now }, // Comment timestamp
    },
  ],
  createdAt: { type: Date, default: Date.now }, // Post timestamp
});

module.exports = mongoose.model('Post', postSchema);