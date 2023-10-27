import React, { useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import Product from 'Components/Product';
import getCategory from '../../api/category';
import getProducts from '../../api/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getCategory(category)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log('Error retrieving products', error);
        });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log('Error retrieving products', error);
        });
    }
  }, [category]);

  return (
    <div className="home">
      <h1 className="home__title">
        {category ? category.toUpperCase() : 'ALL PRODUCTS'}
      </h1>
      <div className="home__products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
