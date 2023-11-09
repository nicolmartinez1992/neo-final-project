import React, { useEffect, useState } from 'react';
import TopBar from 'Components/TopBar';
import { Outlet, useNavigate } from 'react-router-dom';
import './index.scss';

const Layout = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (!user) {
      navigate('/');
    } else {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <div>
      <TopBar />
      <div className="topbar__outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
