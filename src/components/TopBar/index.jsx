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
    <div className="top-bar-container">
      <div className="logo-container">
        <Link>
          <img
            className="logo"
            src="https://img.freepik.com/vector-premium/logotipo-abstracto-letra-c-diseno-colorido-vector-3d_345408-876.jpg"
            alt="logo"
          />
        </Link>
        <h1 className="topbar-title">Online shop</h1>
      </div>
      <div className="buttons-container">
        <Link className="list-item" to="">
          Send Gift
        </Link>
        <Link className="list-item" to="">
          <ShoppingCartIcon />
        </Link>
        <Link className="list-item username" to={`users/${id}`}>
          {username}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
