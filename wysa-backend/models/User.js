const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);
