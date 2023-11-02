import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import getProduct from '../../api/product';
import './index.scss';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log('Error retrieving product', error);
      });
  }, []);

  console.log(product);

  const { title, image, description, category } = product || {};

  return (
    <div className="product-details">
      <div className="product-details__button-container">
        <Link className="product-details__button" to="/">
          {'< Back'}
        </Link>
      </div>
      <div className="product-details__container">
        <div className="product-details__image-container">
          <img
            className="product-details__image"
            src={image}
            alt="product"
          />
        </div>
        <div className="product-details__info">
          <h2>{title}</h2>
          <div className="product-details__category-container">
            <p className="product-details__category">{category}</p>
          </div>
          <p>
            Description:{' '}
            {description ? description.toLowerCase() : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
