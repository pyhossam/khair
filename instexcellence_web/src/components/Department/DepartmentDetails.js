import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../api/config';

const DepartmentDetails = () => {
  const { id } = useParams();
  console.log("param id  : ",id)
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}departments/department/${id}`);
      console.log(response)
      const data = await response.json();
      console.log("data from details : ",data)
      setDepartment(data);
    } catch (error) {
      console.error('Error fetching department:', error);
    }
  };

  if (!department) {
    return <div>Loading department details...</div>;
  }

  return (
    <div>
      <h1>Department Details</h1>
      <h2>{department.name}</h2>
      <p>{department.description}</p>
      <p>{department.location}</p>
    </div>
  );
};

export default DepartmentDetails;