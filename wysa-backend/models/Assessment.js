const mongoose = require('mongoose');
const assessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startedAt: { type: Date, default: Date.now },
  completedAt: Date,
  score: Number
});
module.exports = mongoose.model('Assessment', assessmentSchema);
