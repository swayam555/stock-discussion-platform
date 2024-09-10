const Post = require('../models/post');

const createPost = async (req, res) => {
  const { stockSymbol, title, description, tags } = req.body;
  const post = new Post({ stockSymbol, title, description, tags, createdBy: req.user._id });
  await post.save();
  res.json({ success: true, postId: post._id });
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate('createdBy', 'username');
  res.json(posts);
};

// Add other post-related methods here...

module.exports = { createPost, getAllPosts };
