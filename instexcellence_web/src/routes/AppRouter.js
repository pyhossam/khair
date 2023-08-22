// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Department  from '../components/Department/Department';
import Department from '../components/Department/Department';
import DepartmentDetails from '../components/Department/DepartmentDetails';
import Program from '../components/Program/Program';
import Projects from '../components/Projects/Projects';


const AppRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Department />} />
      <Route exact path="/department/:id" element={<DepartmentDetails />}/>
      <Route exact path="/Program/:id" element={<Program />}/> 
      <Route exact path="/Project/:id" element={<Projects />}/> 
      
       </Routes>
      
      
  </Router>
  );
};

export default AppRouter;