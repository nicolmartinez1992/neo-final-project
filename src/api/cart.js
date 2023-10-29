import instance from './config';

const getCart = (id) => instance.get(`carts/${id}`);

export default getCart;
