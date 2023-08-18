import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../api/config';

const Program = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    fetchProgram();
  }, []);

  const fetchProgram = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}ExPrograms/${id}`);
      const data = await response.json();
      setProgram(data); 
    } catch (error) {
      console.error('Error fetching program:', error);
    }
  };

  if (!program) {
    return <div>Loading program details...</div>;
  }

  return (
    <div>
      <h1>Program Details</h1>
      <h2>{program.Name}</h2>
      <h3>Projects</h3>
      {program.Projects && program.Projects.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {program.Projects.map((project) => (
              <tr key={project.Id}>
                <td>{project.Name}</td>
                <td>
                  <Link to={`/project/${project.Id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No projects available for this program.</p>
      )}
    </div>
  );
};

export default Program;