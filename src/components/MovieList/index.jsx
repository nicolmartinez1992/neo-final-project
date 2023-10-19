import './styles.scss';
import Movie from 'Components/Movie';
import movieType from 'Data/shapes';
import PropTypes from 'prop-types';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

const MovieList = ({ movies = [], isFavoritesPage = false }) => {
  const [favorites, setFavorites] = useOutletContext();

  const removeFromFavorites = (movieIndex) => {
    const newFavourites = [...favorites];
    newFavourites.splice(movieIndex, 1);
    setFavorites(newFavourites);
  };

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const moviesList = isFavoritesPage ? favorites : movies;

  return (
    <div className="movie-list">
      {moviesList.length ? (
        moviesList.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
            addToFavorites={addToFavorites}
          />
        ))
      ) : (
        <div className="movie-list__empty">
          {isFavoritesPage
            ? 'Go to the Home Page to add some movies!'
            : 'No movies found.'}
        </div>
      )}
    </div>
  );
};

MovieList.propTypes = {
  isFavoritesPage: PropTypes.bool,
  movies: PropTypes.arrayOf(movieType).isRequired,
};

export default MovieList;
