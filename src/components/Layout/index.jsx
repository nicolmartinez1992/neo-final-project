import React from 'react';
import TopBar from 'Components/TopBar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <TopBar />
    <Outlet />
  </div>
);

export default Layout;
