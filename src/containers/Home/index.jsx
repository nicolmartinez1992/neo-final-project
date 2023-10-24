import './styles.scss';
import { getMovies } from 'Api/movies';
import MovieList from 'Components/MovieList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const initHome = async () => {
    const movies = await getMovies();

    console.log(movies);

    setMovieList(movies.data.results);
  };

  useEffect(() => {
    initHome();
  }, []);

  return (
    <div className="home">
      <MovieList movies={movieList} />
    </div>
  );
};

export default Home;
