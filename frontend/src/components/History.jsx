import { useEffect, useState } from 'react';
import { getHistory } from '../api';

export default function History({ token }) {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await getHistory(token);
        setHistory(res.data);
      } catch (error) {
        console.error('Error loading history:', error);
        setMessage('Failed to load history');
      }
    }
    fetchHistory();
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">📈 Assessment History</h2>
        <p className="text-gray-600">Track your sleep efficiency progress over time</p>
      </div>
      
      {message && (
        <div className="mb-6 p-4 bg-red-100 border border-red-200 text-red-800 rounded-lg">
          ⚠️ {message}
        </div>
      )}
      
      {history.length === 0 && !message ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-8">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No History Yet</h3>
            <p className="text-gray-600 mb-4">
              No assessment history found. Take your first assessment to see results here!
            </p>
            <div className="bg-blue-100 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                💡 Tip: Regular assessments help track your sleep improvement patterns
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
            <h3 className="text-white font-semibold text-lg">Your Sleep Journey</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    📅 Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    😴 Efficiency Score
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    📊 Rating
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {history.map((h) => (
                  <tr key={h._id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {h.completedAt ? new Date(h.completedAt).toLocaleString() : 'Incomplete'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {h.score !== undefined && h.score !== null ? (
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-blue-600">{h.score}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[100px]">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min(h.score, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {h.score !== undefined && h.score !== null ? (
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          h.score >= 85 ? 'bg-green-100 text-green-800' :
                          h.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {h.score >= 85 ? '🌟 Excellent' :
                           h.score >= 70 ? '👍 Good' :
                           '💪 Needs Improvement'}
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {history.length > 0 && (
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>📊 Total assessments: {history.length}</span>
                <span>
                  🎯 Average score: {
                    Math.round(
                      history
                        .filter(h => h.score !== undefined && h.score !== null)
                        .reduce((sum, h) => sum + h.score, 0) /
                      history.filter(h => h.score !== undefined && h.score !== null).length
                    ) || 0
                  }
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
