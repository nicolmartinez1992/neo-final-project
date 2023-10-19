import React from 'react';

import MovieList from 'Components/MovieList';
import moviesData from 'Data/movies';
import getMovies from "../../api/movies"

import './styles.scss';

const Home = () => {
  const initHome = async () => {
    const movies = await getMovies();
    console.log(movies)
  };

  useEffect(() => {
    initHome();
  }, [])
  return (
  <div className="home">
    <MovieList movies={moviesData} />
  </div>)
};

export default Home;
