import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

const GiftView = ({ firstname, lastname, id }) => (
  <div className="gift-view">
    <div className="gift-view__user-container">
      <span className="gift-view__user">
        {firstname.charAt(0).toUpperCase() + firstname.slice(1)}{' '}
        {lastname.charAt(0).toUpperCase() + lastname.slice(1)}
      </span>
    </div>
    <div className="gift-view__button-container">
      <Link to={`/carts/${id}`} className="gift-view__button">
        View Cart
      </Link>
    </div>
  </div>
);

export default GiftView;

GiftView.propTypes = {
  firstname: PropTypes.string,
  id: PropTypes.number,
  lastname: PropTypes.string,
};
