import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const signin = async (username, password) => {
  return axios.post(`${API_URL}/signin`, { username, password });
};

export const logout = async () => {
  return axios.post(`${API_URL}/logout`);
};
