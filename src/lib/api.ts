import axios from 'axios';
import { StatusUserTypes } from '../types/StatusUserTypes';
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

export const loginUser = async (email: string, password: string): Promise<StatusUserTypes | null> => {
  try {
    const response = await fetch('http://localhost:3000/users/loggin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      return null;
    }
    const data: StatusUserTypes = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};

export const registerUser = async (name: string, email: string, password: string) => {
  const response = await api.post('/auth/register', { name, email, password });
  return response.data;
};

export const getPost = async (id: number) => {
  const response = await fetch(`http://localhost:3000/post/loadOneBy/${id}`)
    .then(res => res.json())
    .then(data => {
      return data
    })
  return response;
};

export const createComment = async (postId: number, userId: number, content: string) => {
  try {
    const response = await fetch(`http://localhost:3000/comment/createCommet/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userId, content: content }),
    });
    if (!response.ok) {
      return null;
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};

export const getDestinations = async () => {
  const response = await fetch('http://localhost:3000/destination/loadAllDestinations')
    .then(res => res.json())
    .then(data => {
      return data
    })
  return response;
};

export const searchPosts = async (query: string) => {
  const response = await api.get(`/posts/search?q=${query}`);
  return response.data;
};

export default api;