import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getAuthHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const signup = (nickname, password) =>
  axios.post(`${API_URL}/signup`, { nickname, password });

export const login = (nickname, password) =>
  axios.post(`${API_URL}/login`, { nickname, password });

export const getQuestions = (token) =>
  axios.get(`${API_URL}/questions`, getAuthHeaders(token));


export const startAssessment = (token) =>
  axios.post(`${API_URL}/assessment/start`, {}, getAuthHeaders(token));

export const submitAnswer = (token, assessmentId, questionId, answer) =>
  axios.post(
    `${API_URL}/assessment/answer`,
    { assessmentId, questionId, answer },
    getAuthHeaders(token)
  );

export const completeAssessment = (token, assessmentId) =>
  axios.post(
    `${API_URL}/assessment/complete`,
    { assessmentId },
    getAuthHeaders(token)
  );

export const getHistory = (token) =>
  axios.get(`${API_URL}/assessment/history`, getAuthHeaders(token));

export const getUserTrends = (token) =>
  axios.get(`${API_URL}/analytics/user-trends`, getAuthHeaders(token));

export const getCommonAnswers = (token) =>
  axios.get(`${API_URL}/analytics/common-answers`, getAuthHeaders(token));
