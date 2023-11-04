import React, { useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import Product from 'Components/Product';
import Loading from 'Components/Loading';
import getCategory from '../../api/category';
import getProducts from '../../api/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      setLoading(true);
      getCategory(category)
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error retrieving products', error);
          setLoading(false);
        });
    } else {
      setLoading(true);
      getProducts()
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error retrieving products', error);
          setLoading(false);
        });
    }
  }, [category]);

  return (
    <div className="home">
      {loading ? (
        <Loading />
      ) : (
        <div className="home__view">
          <h1 className="home__title">
            {category ? category.toUpperCase() : 'ALL PRODUCTS'}
          </h1>
          <div className="home__products">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
