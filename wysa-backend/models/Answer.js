const mongoose = require('mongoose');
const answerSchema = new mongoose.Schema({
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment', required: true },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Answer', answerSchema);
