// Routs.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from "../AuthContext";
import Layout from '../components/Layout/Layout';
import Login from '../components/Home/Login';
import RegistrationForm from '../components/Home/RegistrationForm';
import Teacher from '../components/Teacher/Teacher';

const RoutPage = () => {
  const auth = useAuth();
  const islogedin=(auth.user)?(true):(false);
  return (

    
     
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/Login" element={<Login />} />
          <Route index element={<Teacher islogged={islogedin} />} />
          <Route path="/Teacher" element={<Teacher />} />
          {/* <Route path="/Department/:id" element={<Department />} /> */}
          
        </Route>
      </Routes>
  
  
  );
};

export default RoutPage;