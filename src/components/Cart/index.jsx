import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import CartProduct from 'Components/CartProduct';
import getCart from '../../api/cart';
import getProducts from '../../api/products';
import './index.scss';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await getProducts();
        setProducts(productsResponse.data);

        const cartResponse = await getCart(id);
        const productsResponseData = productsResponse.data;
        const cartResponseData = cartResponse.data;
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
        console.log('Error retrieving data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="cart__loading-container">
        <span className="cart__loading-title">Loading...</span>
        <Circles
          className="cart__loading"
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          marginTop="20px"
        />
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart__empty-warn-container">
          <img
            className="cart__empty-warn-image"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
            alt=""
          />
          <Link to="/" className="cart__empty-warn-button">
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="cart__container">
          {cart.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
          <div className="cart__button-container">
            <button className="cart__button">Buy Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
