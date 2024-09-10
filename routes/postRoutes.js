const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getAllPosts);

module.exports = router;
