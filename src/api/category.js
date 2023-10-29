import instance from './config';

const getCategory = (category) =>
  instance.get(`products/category/${category}`);

export default getCategory;
