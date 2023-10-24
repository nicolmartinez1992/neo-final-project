// Movie.js
import './styles.scss';
import CustomButton from 'Components/CustomButton';
import movieType from 'Data/shapes';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({
  movie,
  favorites,
  removeFromFavorites,
  addToFavorites,
}) => {
  const { id, image, releaseYear, title } = movie;

  const favoriteIndex = favorites?.findIndex((fav) => fav.id === id);
  const isFavorite =
    Number.isInteger(favoriteIndex) && favoriteIndex !== -1;

  return (
    <Link className="movie" to={`/movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={title}
      />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__year">{releaseYear}</p>
      <CustomButton
        name={`${isFavorite ? '- Remove' : '+ Add'}`}
        type={isFavorite ? 'secondary' : 'primary'}
        onClick={() =>
          isFavorite
            ? removeFromFavorites(favoriteIndex)
            : addToFavorites(movie)
        }
      />
    </Link>
  );
};

Movie.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(movieType).isRequired,
  movie: movieType.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default Movie;
