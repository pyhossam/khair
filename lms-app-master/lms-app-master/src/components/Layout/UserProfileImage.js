// Layout/UserProfileImage.js
import React from 'react';

const UserProfileImage = ({ imageUrl }) => {
  return (
    <div className="user-profile">
      <img src={imageUrl} alt="User Profile" />
    </div>
  );
};

export default UserProfileImage;
