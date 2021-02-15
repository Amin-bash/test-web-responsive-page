import React from 'react';
import Navbar from '../Navbar';
import SideNavbar from '../SideNavbar';
import './styles.scss'

const Layout = () => {
  return (
    <div className="layout">
      <SideNavbar />
      <Navbar />
    </div>
  );
};

export default Layout;