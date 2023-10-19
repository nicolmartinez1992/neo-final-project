import peliculas from '../../pages/peliculas';
import getMovies from '../../pages/peliculas';
import { useState } from 'react';
import React from 'react';

const FavoriteMovies = () => {
  const [movieList, setMovieList] = useState([]);

  const getFavoriteMovies = () => {
    setMovieList(getMovies());
  };

  return (
    <div>
      <button onClick={getFavoriteMovies}>Add</button>
    </div>
  );
};
export default FavoriteMovies;
