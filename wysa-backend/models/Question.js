const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  order: { type: Number, required: true },
  type: { type: String, required: true }
});
module.exports = mongoose.model('Question', questionSchema);

