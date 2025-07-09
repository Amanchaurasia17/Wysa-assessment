import { useState } from 'react';
import { signup, login } from '../api';

export default function Auth({ setToken }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (isLogin) {
        const res = await login(nickname, password);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
      } else {
        await signup(nickname, password);
        setMessage('Signup successful! Please login.');
        setIsLogin(true);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl p-8">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">😴</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {isLogin ? 'Welcome Back' : 'Join Us'}
        </h2>
        <p className="text-gray-600">
          {isLogin ? 'Sign in to track your sleep' : 'Create an account to get started'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nickname
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            type="text"
            placeholder="Enter your nickname"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button 
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
          type="submit"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <button
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage('');
          }}
        >
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
        </button>
      </div>
      
      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
          message.includes('successful') 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}
