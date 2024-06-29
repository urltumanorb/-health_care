// src/pages/login.js
import React, { useState } from 'react';
import './login.css';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
// import router from 'next/router';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
  });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // 登录逻辑
      try {
        await login(formData.username, formData.password);
        // router.push('/');
        setError('');
      } catch (error) {
        console.error('Error logging in:', error);
        setError('Login failed');
      }
    } else {
      // 注册逻辑
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/api/register', formData);
        console.log('Register Data:', response.data);
        login();
        setError('');
      } catch (error) {
        console.error('Error registering:', error);
        if (error.response && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError('Registration failed');
        }
      }
    }
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      email: '',
    });
    setError('');
  };

  return (
    <div className='login-page'>
      <Header />
      <div className="auth-form-container">
        <div className="auth-tabs">
          <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>
            Login
          </button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>
            Register
          </button>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-buttons">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AuthForm;
