import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      
      const data = await response.json();
      console.log("data from details : ",data)
      console.log("Programs : ",data.Programs)
      setDepartment(data);
     
      console.log("program length : ",data.Programs)
      console.log("check  : ",Object.values(data.programs))
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
      <h2>{department.StratgicGoal}</h2>
      <h3>Programs</h3>
      {department.Programs && department.Programs.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {department.Programs.map((program) => (
              <tr key={program.Id}>
                <td>{program.Name}</td>
                <td>
                  <Link to={`/program/${program.Id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No programs available for this department.</p>
      )}
    </div>
  );
};

export default DepartmentDetails;