import axios from 'axios';
import { useAuthStore } from './store';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const registerUser = async (name: string, email: string, password: string) => {
  const response = await api.post('/auth/register', { name, email, password });
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createComment = async (postId: string, content: string) => {
  const response = await api.post(`/posts/${postId}/comments`, { content });
  return response.data;
};

export const getDestinations = async () => {
  const response = await api.get('/destinations');
  return response.data;
};

export const searchPosts = async (query: string) => {
  const response = await api.get(`/posts/search?q=${query}`);
  return response.data;
};

export default api;