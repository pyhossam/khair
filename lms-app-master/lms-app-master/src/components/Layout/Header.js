// Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileImage from './UserProfileImage'; // Import UserProfileImage

const Header = () => {
  // You can pass the user profile image URL as a prop to UserProfileImage
  const userProfileImageUrl = 'user_profile_image.png';

  return (
    <div className="header">
      <div className="logo">
        <img src="school_logo.png" alt="School Logo" />
      </div>
      <div className="school-name">
        <h1>School Name</h1>
      </div>
      <div className="user-profile">
        {/* Include UserProfileImage component with the user profile image URL */}
        <UserProfileImage imageUrl={userProfileImageUrl} />
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