import instance from './config';

const getUser = (id) => instance.get(`users/${id}`);

export default getUser;
