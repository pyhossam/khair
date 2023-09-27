import React, { createContext, useContext, useState, useEffect } from 'react';
import  {API_ENDPOINTS} from './api/api';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        debugger;
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('userToken', userData.token);
        return true;
      } else {
        throw new Error('Authentication failed');
        return false;
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userToken');
  };

  const loginWithStoredToken = async (storedToken) => {
    try {
      const response = await fetch(API_ENDPOINTS.verifyToken, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: storedToken,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        // navigate(`/Departments`);
      } else {
        console.error('Token verification failed');
        localStorage.removeItem('userToken');
      }
    } catch (error) {
      console.error('An error occurred while verifying token:', error);
      localStorage.removeItem('userToken');
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      loginWithStoredToken(storedToken);
    }
  }, []);

  return (
 
    <AuthContext.Provider value={{ user, login, logout, loginWithStoredToken }}>
      {children}
    </AuthContext.Provider>
    
  );
};
