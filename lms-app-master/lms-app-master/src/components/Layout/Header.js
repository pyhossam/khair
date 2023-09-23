// Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="school_logo.png" alt="School Logo" />
      </div>
      <div className="school-name">
        <h1>School Name</h1>
      </div>
      <div className="user-profile">
        <img src="user_profile_image.png" alt="User Profile" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/teacher">Teacher</Link>
        {/* Add more navigation links here */}
      </nav>
    </div>
  );
};

export default Header;
