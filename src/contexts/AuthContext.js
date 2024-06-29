// src/contexts/AuthContext.js
import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const login = async (username, password, onSuccess) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
