import instance from './config';

const getProduct = (id) => instance.get(`products/${id}`);

export default getProduct;
