import React, { useEffect, useState } from 'react';
import Products from 'Components/ProductsList';
import { useParams } from 'react-router-dom';
import getCart from '../../api/cart';

const Cart = () => {
  const [cart, setCart] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCart(id)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.log('Error retrieving cart', error);
      });
  }, [id]);

  console.log('cart', cart);

  return (
    <div className="cart">
      {/* {cart && cart.products
        ? cart.products.map((product) => (
            <Products key={product.id} {...product} />
          ))
        : ''} */}
      <Products items={cart.products} title={'CART'} />
    </div>
  );
};

export default Cart;
