const User = require('../models/user');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ username, email, password });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

  res.status(201).json({ token, user: { id: user._id, username, email } });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };
