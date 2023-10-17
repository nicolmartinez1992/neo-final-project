import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList';
import YearFilter from '../../components/YearFilter';
import './index.scss';
import getMovies from '../../pages/peliculas';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((movie) => {
        setMovies(movie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movies]);

  return (
    <div className="home">
      <div className="search-bar-container">
        <YearFilter />
        <SearchBar />
      </div>
      <MovieList />
      {/* <Button type="secondary" isDisabled></Button> */}
    </div>
  );
};

export default Home;
