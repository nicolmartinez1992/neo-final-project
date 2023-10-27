import { PropTypes } from 'prop-types';
import * as React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Card = ({ image, title, price, category }) => (
  <div className="card">
    <div className="card__image-container">
      <img className="card__image" src={image} alt="" />
    </div>
    <div className="card__content">
      <h2>{title}</h2>
      <p>Price: US${price}</p>
      <p>Category: {category}</p>
    </div>
    <div className="card__button-container">
      <Link className="card__button">Details</Link>
    </div>
  </div>
);

Card.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
