import React, { useEffect, useState } from 'react';
import getMovies from '../../pages/peliculas';
import Movie from '../Movie';
import './index.scss';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((movies) => {
        setMovieList(movies);
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
      });
  }, []);

  const addToFavorite = (movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };

  // El useEffect permite ejecutar código adicional en respuesta a ciertos cambios en el componente
  // El array al final del useEffect hace que el efecto del mismo se ejecute una sola vez sino se genera un bucle

  return (
    <div>
      {/* All movies */}
      <div className="container">
        <h1>All movies</h1>
        <div className="movies-container">
          {movieList.map((movie) => (
            <Movie
              key={movie.id}
              addToFavorite={() => addToFavorite(movie)}
              {...movie}
            />
          ))}
        </div>
      </div>
      {/* Favorite movies */}
      <div className="container">
        <h1>Favorite movies</h1>
        <div className="movies-container">
          {favoriteMovies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
