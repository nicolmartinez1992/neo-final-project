import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartProduct from 'Components/CartProduct';
import getCart from '../../api/cart';
import getProducts from '../../api/products';
import './index.scss';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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
      } catch (error) {
        console.log('Error retrieving data', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="cart">
      <div className="cart__container">
        {cart.map((product) => (
          <CartProduct key={product.id} {...product} />
        ))}
      </div>
      <div className="cart__button-container">
        <button className="cart__button">Buy Cart</button>
      </div>
    </div>
  );
};

export default Cart;
