import axios from 'axios';

export const API_URL = 'http://localhost:4999/api';

const API = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export enum Routes {
  registration = '/registration',
  login = '/login',
  logout = '/logout',
  getUsers = '/users',
}

export default API;
