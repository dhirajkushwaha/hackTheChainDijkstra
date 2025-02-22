// backend/routes/posts.js
const express = require('express');
const Post = require('../models/Post');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Create a new post
// backend/routes/posts.js
router.post('/', authMiddleware, async (req, res) => {
    try {
      const { heading, content } = req.body; // Extract heading and content
      const post = new Post({ heading, content, user: req.userId }); // Create a new post
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Like a post
router.post('/:postId/like', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // Check if the user already liked the post
    if (post.likes.includes(req.userId)) {
      return res.status(400).json({ error: 'You already liked this post' });
    }  
    else{

      post.likes.push(req.userId); // Add the user to the likes array
      await post.save();
      res.json(post);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

});

// Add a comment to a post
router.post('/:postId/comment', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const comment = { user: req.userId, content };
    post.comments.push(comment); // Add the comment to the comments array
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all posts
router.get('/', authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username').populate('comments.user', 'username');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;