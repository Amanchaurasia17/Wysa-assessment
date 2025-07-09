const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { nickname, password } = req.body;
  if (!nickname || !password) return res.status(400).json({ message: 'Nickname and password required' });
  const existing = await User.findOne({ nickname });
  if (existing) return res.status(400).json({ message: 'Nickname already exists' });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ nickname, passwordHash });
  await user.save();
  res.json({ message: 'Signup successful' });
});

router.post('/login', async (req, res) => {
  const { nickname, password } = req.body;
  const user = await User.findOne({ nickname });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, nickname: user.nickname }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
});

module.exports = router;
