import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../api/config';

const Projects = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log("Start read response from prog : ")
      const response = await fetch(`${API_BASE_URL}Projects/${id}`);
      console.log("response program: ",response)
      const data = await response.json();
      console.log("data for projects : ",data)
      if (data) {
      setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  if (projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
      <li>{projects.name}</li>
        
      </ul>
    </div>
  );
};

export default Projects;