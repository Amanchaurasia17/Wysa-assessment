const express = require('express');
const Assessment = require('../models/Assessment');
const Answer = require('../models/Answer');
const Question = require('../models/Question');

const auth = require('../middleware/auth');
const router = express.Router();

router.post('/start', auth, async (req, res) => {
  const assessment = new Assessment({ userId: req.user.id });
  await assessment.save();
  res.json({ assessmentId: assessment._id });
});

router.post('/answer', auth, async (req, res) => {
  const { assessmentId, questionId, answer } = req.body;
  const ans = new Answer({ assessmentId, questionId, answer });
  await ans.save();
  res.json({ message: 'Answer recorded' });
});

router.post('/complete', auth, async (req, res) => {
  const { assessmentId } = req.body;
  if (!assessmentId) {
    return res.status(400).json({ message: 'assessmentId is required' });
  }

  try {
    const answers = await Answer.find({ assessmentId });
    if (!answers.length) {
      return res.status(400).json({ message: 'No answers found for this assessment' });
    }

    const questionIds = answers.map(a => a.questionId);

    const questions = await Question.find({ _id: { $in: questionIds } });

    const questionMap = {};
    questions.forEach(q => {
      questionMap[q._id.toString()] = q.order;
    });

    let bedtimeStr = null;
    let wakeupStr = null;
    let hoursSleptStr = null;

    answers.forEach(ans => {
      const order = questionMap[ans.questionId.toString()];
      if (order === 1) {
        bedtimeStr = ans.answer;
      } else if (order === 2) {
        wakeupStr = ans.answer;
      } else if (order === 3) {
        hoursSleptStr = ans.answer;
      }
    });

    if (!bedtimeStr || !wakeupStr || !hoursSleptStr) {
      return res.status(400).json({ message: 'Required answers (bedtime, wakeup, hoursSlept) are missing' });
    }

    function timeToMinutes(timeStr) {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    }

    const bedtimeMins = timeToMinutes(bedtimeStr);
    const wakeupMins = timeToMinutes(wakeupStr);
    const hoursSlept = parseFloat(hoursSleptStr);

    let timeInBedMins = 0;
    if (wakeupMins >= bedtimeMins) {
      timeInBedMins = wakeupMins - bedtimeMins;
    } else {
      timeInBedMins = (24 * 60 - bedtimeMins) + wakeupMins;
    }

    const sleepEfficiency = (hoursSlept * 60) / timeInBedMins * 100;
    const roundedScore = Math.round(sleepEfficiency);

    const assessment = await Assessment.findByIdAndUpdate(
      assessmentId,
      { completedAt: new Date(), score: roundedScore },
      { new: true }
    );

    res.json({ message: 'Assessment completed', assessment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



router.get('/history', auth, async (req, res) => {
  const assessments = await Assessment.find({ userId: req.user.id }).sort({ startedAt: -1 });
  res.json(assessments);
});

module.exports = router;
