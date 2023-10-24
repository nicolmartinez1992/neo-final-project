// Layout.js
import './styles.scss';
import logo from 'Assets/logo.png';
import TopBar from 'Components/TopBar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="layout">
      <TopBar
        logo={logo}
        routes={[
          { label: 'Home', route: '/' },
          { label: 'Favorites', route: '/favorites' },
        ]}
      />
      <div className="layout__children">
        <Outlet context={[favorites, setFavorites]} />
      </div>
    </div>
  );
};

export default Layout;
