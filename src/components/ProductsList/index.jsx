import React from 'react';
import Product from 'Components/Product';
import './index.scss';
import { PropTypes } from 'prop-types';

const Products = ({ items = [], title }) => {
  console.log(items);
  return (
    <div className="container">
      <h1 className="products-title">{title}</h1>
      <div className="products-container">
        {items.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default Products;
