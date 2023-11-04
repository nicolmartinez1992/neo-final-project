import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartProduct from 'Components/CartProduct';
import Loading from 'Components/Loading';
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
    return <Loading />;
  }

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart__warning-container">
          <img
            className="cart__warning-image"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
            alt=""
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
            <button className="cart__button">Buy Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
