import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../../api/config';

const SubGoals = () => {
  const [subgoals, setSubgoals] = useState([]);

  useEffect(() => {
    fetchSubgoals();
  }, []);

  const fetchSubgoals = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}subgoals`);
      const data = await response.json();
      setSubgoals(data);
    } catch (error) {
      console.error('Error fetching subgoals:', error);
    }
  };

  if (subgoals.length === 0) {
    return <div>Loading subgoals...</div>;
  }

  return (
    <div>
      <h1>Subgoals</h1>
      <ul>
        {subgoals.map((subgoal) => (
          <li key={subgoal.id}>{subgoal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubGoals;