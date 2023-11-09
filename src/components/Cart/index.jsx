import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartProduct from 'Components/CartProduct';
import Loading from 'Components/Loading';
import Error from 'Components/Error';
import getCart from '../../api/cart';
import getProducts from '../../api/products';
import './index.scss';
import cartImage from '../../assets/images/cart.png';
import errorImage from '../../assets/images/error.png';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await getProducts();
        setProducts(productsResponse.data);

        const cartResponse = await getCart(id);
        const productsResponseData = productsResponse.data;
        const cartResponseData = cartResponse.data;

        if (cartResponseData === null) {
          setErrorMessage('cart id should be provided');
        }

        const filteredProducts =
          cartResponseData.products &&
          cartResponseData.products.map((prod) => {
            const newProduct = productsResponseData.find(
              (item) => item.id === prod.productId,
            );

            if (newProduct) {
              return {
                ...newProduct,
                quantity: prod.quantity,
              };
            }
          });
        setCart(filteredProducts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error?.response?.data?.message);
      }
    };

    fetchData();
  }, [id]);

  if (errorMessage === 'cart id should be provided') {
    return (
      <div className="cart__error">
        <Error title="THIS ID DOES NOT EXIST" image={errorImage} />
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart__warning-container">
          <h1 className="cart__warning-title">
            NO ITEMS IN THIS CART
          </h1>
          <img
            className="cart__warning-image"
            src={cartImage}
            alt="cart"
          />
          <Link to="/" className="cart__warning-button">
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="cart__container">
          {cart.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
          <div className="cart__button-container">
            <Link to="/" className="cart__button">
              Buy Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
