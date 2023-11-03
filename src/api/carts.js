import instance from './config';

const getCarts = () => instance.get('carts');

export default getCarts;
