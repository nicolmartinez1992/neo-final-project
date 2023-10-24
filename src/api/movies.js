import instance from './config';

const getMovies = () => instance.get('discover/movie');
const getMovieDetails = (id) => instance.get(`/movie/${id}`);

export { getMovies, getMovieDetails };
