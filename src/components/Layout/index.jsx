import React, { useEffect, useState } from 'react';
import TopBar from 'Components/TopBar';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (!user) {
      navigate('/login');
    } else {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
};

export default Layout;
