// Teacher/TeacherCard.js
import React from 'react';

const TeacherCard = ({ section }) => {
  return (
    <div className="teacher-card">
      <h3>{section.name}</h3>
      <p>{section.description}</p>
      {/* Add additional details about the section if needed */}
    </div>
  );
};

export default TeacherCard;
