const express = require('express');
const Question = require('../models/Question');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const questions = await Question.find().sort({ order: 1 });
  res.json(questions);
});

module.exports = router;
