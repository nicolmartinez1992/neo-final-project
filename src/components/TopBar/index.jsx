import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from 'Components/DropdownMenu';
import './index.scss';
import getUsers from '../../api/users';

const TopBar = () => {
  const [username, setUsername] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.log('Error retrieving data', error);
      });
    const user = localStorage.getItem('username');
    setUsername(user);
  }, []);

  const loggedUser = users.find((data) => data.username === username);
  const userId = loggedUser ? loggedUser.id : null;

  return (
    <div className="topbar">
      <Link to="/" className="topbar__title-container">
        <h1 className="topbar__title">ONLINE SHOP</h1>
      </Link>
      <div className="topbar__items-container">
        {username ? (
          <div className="topbar__items">
            <Link className="topbar__item" to="/carts">
              Send Gift
            </Link>
            <Link
              className="topbar__item topbar__cart"
              to={`/carts/${userId}`}>
              <ShoppingCartIcon />
            </Link>
          </div>
        ) : (
          ''
        )}
        {username ? (
          <Menu username={username} id={userId} />
        ) : (
          <div className="topbar__profile">
            <Link to="/login" className="topbar__profile-title">
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
