import './index.scss';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = ({ logo, routes }) => (
  <div>
    <ul className="menuContainer">
      <li className="listItem">
        <img className="logo" src={logo} alt="logo" />
      </li>
      <Link className="listItem" to={routes[0].route}>
        {routes[0].label}
      </Link>
      <Link className="listItem" to={routes[1].route}>
        {routes[1].label}
      </Link>
    </ul>
  </div>
);

TopBar.propTypes = {
  logo: PropTypes.string,
  routes: PropTypes.string,
};

export default TopBar;
