import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './index.scss';

const TopBar = () => {
  const [username, setUsername] = useState();
  const { id } = useParams();

  useEffect(() => {
    const user = localStorage.getItem('usuario');
    setUsername(user);
  }, []);

  return (
    <div className="topbar">
      <Link to="/" className="topbar__title-container">
        <h1 className="topbar__title">ONLINE SHOP</h1>
      </Link>
      <div className="topbar__items-container">
        <Link className="topbar__item" to="/carts">
          Send Gift
        </Link>
        <Link
          className="topbar__item topbar__cart"
          to={`carts/${id}`}>
          <ShoppingCartIcon />
        </Link>
        <Link
          className="topbar__item topbar__username"
          to={`users/${id}`}>
          {username}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
