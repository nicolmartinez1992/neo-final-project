import React from 'react';
import './index.scss';
import { PropTypes } from 'prop-types';

const CartProduct = ({ price, quantity, image, title }) => {
  return (
    <div className="cart-product">
      <div className="cart-product__container">
        <img
          src={image}
          alt="product__image"
          className="cart-product__image"
        />
        <div className="cart-product__data">
          <div className="cart-product__title-container">
            <span className="cart-product__item--white">{title}</span>
          </div>
          <div className="cart-product__details">
            <span className="cart-product__item">{quantity}</span>
            <span className="cart-product__item--white">X</span>
            <span className="cart-product__item">${price}</span>
            <span className="cart-product__item--white">=</span>
            <span className="cart-product__item">
              ${price * quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

CartProduct.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
};