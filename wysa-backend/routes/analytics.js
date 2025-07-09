const express = require('express');
const Assessment = require('../models/Assessment');
const Answer = require('../models/Answer');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/user-trends', auth, async (req, res) => {
  const assessments = await Assessment.find({ userId: req.user.id });
  const avgScore = assessments.reduce((sum, a) => sum + (a.score || 0), 0) / (assessments.length || 1);
  res.json({ averageScore: avgScore, totalAssessments: assessments.length });
});

router.get('/common-answers', auth, async (req, res) => {
  const pipeline = [
    { $group: { _id: "$answer", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 5 }
  ];
  const commonAnswers = await Answer.aggregate(pipeline);
  res.json(commonAnswers);
});

module.exports = router;
