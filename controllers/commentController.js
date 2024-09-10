// commentController.js

const Comment = require('../models/Comment'); // Adjust the path as necessary
const Post = require('../models/Post'); // Adjust the path as necessary

// Add a Comment to a Post
const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Create and save the comment
    const newComment = new Comment({
      postId,
      userId,
      comment,
      createdAt: new Date(),
    });
    await newComment.save();

    // Add the comment to the post's comments array
    post.comments.push(newComment._id);
    await post.save();

    res.status(201).json({ success: true, commentId: newComment._id, message: 'Comment added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Comment
const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const userId = req.user.id;

    // Find and delete the comment
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the comment belongs to the user
    if (comment.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await Comment.findByIdAndDelete(commentId);

    // Remove the comment from the post's comments array
    const post = await Post.findById(postId);
    if (post) {
      post.comments = post.comments.filter(c => c.toString() !== commentId);
      await post.save();
    }

    res.json({ success: true, message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addComment,
  deleteComment,
};
