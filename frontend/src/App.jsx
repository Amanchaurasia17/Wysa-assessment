import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Assessment from './components/Assessment';
import History from './components/History';
import Analytics from './components/Analytics';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar token={token} setToken={setToken} />
        <div className="container mx-auto px-4 py-8">
          {!token ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <Auth setToken={setToken} />
            </div>
          ) : (
            <>
              <nav className="mb-8 bg-white rounded-lg shadow-md p-4">
                <div className="flex space-x-6">
                  <Link 
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium" 
                    to="/"
                  >
                    📊 Assessment
                  </Link>
                  <Link 
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium" 
                    to="/history"
                  >
                    📈 History
                  </Link>
                  <Link 
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium" 
                    to="/analytics"
                  >
                    🔍 Analytics
                  </Link>
                </div>
              </nav>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Routes>
                  <Route path="/" element={<Assessment token={token} />} />
                  <Route path="/history" element={<History token={token} />} />
                  <Route path="/analytics" element={<Analytics token={token} />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </>
          )}
        </div>
      </div>
    </Router>
  );
}
