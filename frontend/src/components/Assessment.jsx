import { useEffect, useState } from 'react';
import { getQuestions, startAssessment, submitAnswer, completeAssessment } from '../api';

const isTimeQuestion = (questionText) => {
  const timeKeywords = ['bedtime', 'wake up', 'sleep time', 'wake time', 'go to bed', 'get up'];
  return timeKeywords.some(keyword => 
    questionText.toLowerCase().includes(keyword.toLowerCase())
  );
};

export default function Assessment({ token }) {
  const [questions, setQuestions] = useState([]);
  const [assessmentId, setAssessmentId] = useState('');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const qRes = await getQuestions(token);
        setQuestions(qRes.data);
        const aRes = await startAssessment(token);
        setAssessmentId(aRes.data.assessmentId);
      } catch (error) {
        console.error('Error loading questions:', error);
        setMessage('Failed to load questions');
      }
    }
    fetchData();
  }, [token]);

  const handleAnswer = async (e) => {
    e.preventDefault();
    const q = questions[current];
    const answer = answers[q._id];
    if (!answer) {
      setMessage('Please enter an answer');
      return;
    }
    try {
      await submitAnswer(token, assessmentId, q._id, answer);
      if (current === questions.length - 1) {
        const res = await completeAssessment(token, assessmentId);
        setScore(res.data.assessment.score);
      } else {
        setCurrent(current + 1);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
      setMessage('Error submitting answer');
    }
  };

  if (score !== null) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 shadow-lg">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Assessment Complete!</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-lg text-gray-600 mb-2">Your Sleep Efficiency Score:</p>
            <div className="text-4xl font-bold text-blue-600 mb-4">{score}</div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(score, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">
              {score >= 85 ? 'Excellent sleep efficiency! 😴' : 
               score >= 70 ? 'Good sleep efficiency! 👍' : 
               'Room for improvement in sleep efficiency 💪'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading assessment...</p>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Sleep Assessment</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {current + 1} of {questions.length}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleAnswer} className="space-y-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
            {q.text}
          </h4>
          {isTimeQuestion(q.text) ? (
            <div className="space-y-2">
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                type="time"
                value={answers[q._id] || ''}
                onChange={e => setAnswers({ ...answers, [q._id]: e.target.value })}
                required
              />
              <p className="text-sm text-gray-500 flex items-center">
                🕐 Please select time in 24-hour format
              </p>
            </div>
          ) : (
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
              type={q.type === 'input' ? 'text' : 'number'}
              value={answers[q._id] || ''}
              onChange={e => setAnswers({ ...answers, [q._id]: e.target.value })}
              placeholder={q.type === 'number' ? 'Enter a number...' : 'Type your answer...'}
              required
            />
          )}
        </div>
        
        <button 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
          type="submit"
        >
          {current === questions.length - 1 ? '🏁 Finish Assessment' : '➡️ Next Question'}
        </button>
      </form>
      
      {message && (
        <div className="mt-4 p-4 bg-red-100 border border-red-200 text-red-800 rounded-lg text-center font-medium">
          ⚠️ {message}
        </div>
      )}
    </div>
  );
}
