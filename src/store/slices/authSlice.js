// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: typeof window !== 'undefined' ? !!localStorage.getItem('token') : false,
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{}') : null,
    error: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = '';
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout, clearError } = authSlice.actions;

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', { username, password });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    dispatch(loginSuccess(response.data.user));
  } catch (error) {
    dispatch(loginFailure('Login failed'));
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/register', formData);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    dispatch(loginSuccess(response.data.user));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.error || 'Registration failed'));
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(logout());
};

export default authSlice.reducer;
