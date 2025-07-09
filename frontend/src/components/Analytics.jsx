import { useEffect, useState } from 'react';
import { getUserTrends, getCommonAnswers } from '../api';

export default function Analytics({ token }) {
  const [trends, setTrends] = useState(null);
  const [commonAnswers, setCommonAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const [trendsRes, answersRes] = await Promise.all([
          getUserTrends(token),
          getCommonAnswers(token)
        ]);
        
        setTrends(trendsRes.data);
        setCommonAnswers(answersRes.data);
      } catch (error) {
        console.error('Error loading analytics:', error);
        setMessage('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    }
    
    if (token) {
      fetchAnalytics();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">📊</div>
          <p className="text-lg text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2"> Sleep Analytics</h2>
        <p className="text-gray-600">Insights into your sleep patterns and trends</p>
      </div>
      
      {message && (
        <div className="p-4 bg-red-100 border border-red-200 text-red-800 rounded-lg">
          ⚠️ {message}
        </div>
      )}

      {/* User Trends Section */}
      {trends && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 -m-6 mb-6 px-6 py-4 rounded-t-xl">
            <h3 className="text-white font-semibold text-lg flex items-center">
              📈 Your Sleep Trends
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Average Score</h4>
                <div className="text-2xl">🎯</div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(trends.averageScore)}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(trends.averageScore, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {trends.averageScore >= 85 ? 'Excellent performance! 🌟' : 
                 trends.averageScore >= 70 ? 'Good consistency! 👍' : 
                 'Room for improvement! 💪'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-800">Total Assessments</h4>
                <div className="text-2xl">📋</div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {trends.totalAssessments}
              </div>
              <p className="text-sm text-gray-600">
                {trends.totalAssessments >= 10 ? 'Great tracking habit! 🏆' :
                 trends.totalAssessments >= 5 ? 'Building consistency! 📈' :
                 'Keep going! 🚀'}
              </p>
            </div>
          </div>

          {trends.totalAssessments > 1 && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Insights</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                {trends.averageScore >= 85 && (
                  <li>• Your sleep efficiency is excellent - keep up the great work!</li>
                )}
                {trends.averageScore >= 70 && trends.averageScore < 85 && (
                  <li>• You're doing well! Consider optimizing your bedtime routine for even better scores.</li>
                )}
                {trends.averageScore < 70 && (
                  <li>• Focus on consistent sleep and wake times to improve your efficiency.</li>
                )}
                {trends.totalAssessments >= 7 && (
                  <li>• You're building a great habit of tracking your sleep regularly!</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Common Answers Section */}
      {commonAnswers.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 -m-6 mb-6 px-6 py-4 rounded-t-xl">
            <h3 className="text-white font-semibold text-lg flex items-center">
              🔍 Common Sleep Patterns
            </h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Most frequently reported answers across all users (anonymized data):
            </p>
            
            <div className="grid gap-3">
              {commonAnswers.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-800">"{item._id}"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">mentioned</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm font-medium">
                      {item.count} times
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-700">
                💡 This data helps identify common sleep patterns and can guide improvements to the assessment.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* No Data State */}
      {!trends && !message && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-8">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Analytics Available</h3>
            <p className="text-gray-600 mb-4">
              Complete some assessments to see your analytics and trends!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
