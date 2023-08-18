import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../api/config';

const Department = () => {
  debugger;
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      console.log(API_BASE_URL+'departments');
      const response = await fetch(API_BASE_URL+'departments');
      console.log("response is "+response )
      const data = await response;
      console.log("Data is  : "+data)
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>
            <Link to={`/department/${department.id}`}>{department.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Department;