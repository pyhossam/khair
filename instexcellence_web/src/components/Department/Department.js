import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../api/config';
import DepartmentDetails from '../Department/DepartmentDetails';
const Department = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await fetch(API_BASE_URL + 'departments');
      if (!response.ok) {
        throw new Error('Error fetching departments');
      }
      const data = await response.json(); // Parse the JSON data
      console.log('Fetched Data:', data); // Log the fetched data
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {departments.length > 0 ? (
          departments.map((department) => (
            <li key={department.id}>
              <Link to={`/Department/${department.Id}` } >{department.Name }</Link>
            </li>
          ))
        ) : (
          <li>No departments available</li>
        )}
      </ul>
    </div>
  );
};

export default Department;
