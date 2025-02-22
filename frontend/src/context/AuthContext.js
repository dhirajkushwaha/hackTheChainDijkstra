'use client'; // Mark this as a client component (for Next.js 13+)

import { createContext, useContext, useState, useEffect } from 'react';
const dotenv = require('dotenv');
dotenv.config();

import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response.data.user) {
        setUser(response.data.user); // Update user state
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error; // Re-throw the error for handling in the component
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/register`,
        { username, email, password, verificationDocLink },
        { withCredentials: true }
      );
      console.log("registered ")
      if (response.data.user) {
        setUser(response.data.user); // Update user state
      }
    } catch (error) {
      console.error('Registration failed:', error.message);
      throw error; // Re-throw the error for handling in the component
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null); // Clear user state
    } catch (error) {
      console.error('Logout failed:', error.message);
      throw error; // Re-throw the error for handling in the component
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/me`,
        { withCredentials: true }
      );
      if (response.data.user) {
        setUser(response.data.user); // Update user state
      }
    } catch (error) {
      console.error('Failed to fetch user:', error.message);
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  useEffect(() => {
    
    if (!user) {
      fetchUser();
    } 
  }, [user]); // Run only once on component mount

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);