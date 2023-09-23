// Teacher/Teacher.js
import React from 'react';
import Layout from '../Layout/Layout';
import TeacherCard from './TeacherCard';

const Teacher = () => {
  // Dummy data for sections assigned to the teacher
  const sections = [
    { id: 1, name: 'Section 1', description: 'Description for Section 1' },
    { id: 2, name: 'Section 2', description: 'Description for Section 2' },
    // Add more sections here
  ];

  return (
    <Layout>
      <div className="teacher">
        <h2>Your Sections</h2>
        <div className="section-list">
          {sections.map((section) => (
            <TeacherCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Teacher;
