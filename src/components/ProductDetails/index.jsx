import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './index.scss';
import Loading from 'Components/Loading';
import Error from 'Components/Error';
import getProduct from '../../api/product';
import errorImage from '../../assets/images/error.png';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const { title, image, description, category } = product || {};

  if (!product) {
    return (
      <div className="product-details__error">
        <Error title="THIS ID DOES NOT EXIST" image={errorImage} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error title="SOMETHING WENT WRONG" image={errorImage} />
      </div>
    );
  }

  return (
    <div className="product-details">
      {loading ? (
        <Loading />
      ) : (
        <div className="product-details__global-container">
          <div className="product-details__button-container">
            <button
              className="product-details__button"
              onClick={() => navigate(-1)}>
              {'< Back'}
            </button>
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
                <p className="product-details__category">
                  {category}
                </p>
              </div>
              <p>
                Description:{' '}
                {description ? description.toLowerCase() : ''}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
