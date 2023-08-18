// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Department  from '../components/Department/Department';
import Department from '../components/Department/Department';


const AppRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Department />} />
    </Routes>
  </Router>
  );
};

export default AppRouter;