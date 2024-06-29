// src/pages/login.js
import React, { useEffect, useState } from 'react';
import './login.css';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import { useDispatch, useSelector } from 'react-redux';
import { login, register, clearError } from '../store/slices/authSlice';
import { useRouter } from 'next/router';

const initForm = {
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  email: '',
}
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initForm);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const authError = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(clearError());
  }, [isLogin, dispatch]);
  
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
      dispatch(login(formData.username, formData.password));
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      dispatch(register(formData));
    }
  };

  if (isLoggedIn) {
    router.push('/home');
  }

  return (
    <div className='login-page'>
      <Header />
      <div className="auth-form-container">
        <div className="auth-tabs">
          <button onClick={() => {setIsLogin(true); setFormData(initForm); setError('')}} className={isLogin ? 'active' : ''}>
            Login
          </button>
          <button onClick={() => {setIsLogin(false); setFormData(initForm); setError('')}} className={!isLogin ? 'active' : ''}>
            Register
          </button>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          {(error || authError) && <div className="error-message">{error || authError}</div>}
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
