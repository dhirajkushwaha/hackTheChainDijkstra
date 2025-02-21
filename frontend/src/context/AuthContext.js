// context/AuthContext.js
'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
    setUser(response.data.user);
  };

  const register = async (username, email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password }, { withCredentials: true });
    setUser(response.data.user);
  };

  const logout = async () => {
    await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
    setUser(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/auth/me', { withCredentials: true });
      if (response.data.user) {
        setUser(response.data.user);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);