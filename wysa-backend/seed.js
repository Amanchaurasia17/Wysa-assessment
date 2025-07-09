const mongoose = require('mongoose');
const Question = require('./models/Question');
require('dotenv').config();

const questions = [
  { text: "What is your bedtime?", order: 1, type: "input" },
  { text: "What time do you wake up?", order: 2, type: "input" },
  { text: "How many hours do you sleep?", order: 3, type: "multiple-choice" },
 
];

mongoose.connect(process.env.MONGODB_URL)
  .then(async () => {
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log('Questions seeded');
    mongoose.disconnect();
  });
