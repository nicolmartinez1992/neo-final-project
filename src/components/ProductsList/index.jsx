import React from 'react';
import Product from 'Components/Product';
import './index.scss';
import { PropTypes } from 'prop-types';

const Products = ({ items = [], title }) => {
  console.log(items);
  return (
    <div className="products">
      <h1 className="products__title">{title}</h1>
      <div className="products__container">
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
