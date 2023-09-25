// Layout.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        {/* You can add the main content of your page here */}
      </div>
    </div>
  );
};

export default Layout;