import instance from './config';

const getCategories = () => instance.get('products/categories');

export default getCategories;
