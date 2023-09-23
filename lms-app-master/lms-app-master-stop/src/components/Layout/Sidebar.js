// Layout/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li>
          <a href="#">Service 1</a>
        </li>
        <li>
          <a href="#">Service 2</a>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
