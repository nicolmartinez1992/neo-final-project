import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { PropTypes } from 'prop-types';

const Menu = ({ id, username }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const redirectToProfile = () => {
    navigate(`/users/${id}`);
  };

  const redirectToLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="menu">
      <div className="menu__dropdown" onClick={() => setOpen(!open)}>
        <div className="menu__username">{username}</div>
        {open && (
          <ul className="menu__options">
            <li className="menu__item" onClick={redirectToProfile}>
              Profile
            </li>
            <li className="menu__item" onClick={redirectToLogout}>
              Log out
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
};
