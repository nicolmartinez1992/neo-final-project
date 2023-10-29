import { useEffect, useState } from 'react';
import React from 'react';
import Filters from 'Components/Filters';
import Product from 'Components/Product';
import getProducts from '../../api/products';
import './index.scss';

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setItems(products.data);
      })
      .catch((error) => {
        console.log('Error retrieving products', error);
      });
  }, []);

  return (
    <div className="container">
      <Filters />
      <h1 className="products-title">ALL PRODUCTS</h1>
      <div className="products-container">
        {items.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;