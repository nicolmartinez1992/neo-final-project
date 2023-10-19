import getMovies from '../../api/movies';
import './styles.scss';
import MovieList from 'Components/MovieList';
import moviesData from 'Data/movies';
import React from 'react';

const Home = () => {
  const initHome = async () => {
    const movies = await getMovies();
    console.log(movies);
  };

  useEffect(() => {
    initHome();
  }, []);
  return (
    <div className="home">
      <MovieList movies={moviesData} />
    </div>
  );
};

export default Home;
