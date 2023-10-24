import './styles.scss';
import { getMovieDetails } from 'Api/movies';
import noMovie from 'Assets/noMovie.jpg';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieView = () => {
  const { id } = useParams();

  const [movieToDisplay, setMovieToDisplay] = useState(null);
  const [error, setError] = useState(false);

  const retrieveMovieDetails = async () => {
    const selectedMovie = await getMovieDetails(id);

    console.log(selectedMovie);

    if (!id || !selectedMovie) {
      setError(true);
    } else {
      setMovieToDisplay(selectedMovie.data);
    }
  };

  useEffect(() => {
    retrieveMovieDetails();
  }, []);

  if (error) {
    return (
      <div className="movie-view movie-view--error">
        <h1>No movie found :(</h1>
        <img src={noMovie} alt="not found" />
      </div>
    );
  }

  const {
    overview,
    poster_path,
    release_date,
    original_title,
    genres,
  } = movieToDisplay || {};

  return (
    <div className="movie-view">
      <div className="movie-view__image">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
        />
      </div>
      <div className="movie-view__details">
        <h2 className="movie-view__title">{original_title}</h2>
        <p className="movie-view__release-year">
          {`Published in ${release_date}`}
        </p>
        <p className="movie-view__description">{overview}</p>
        <p>
          Genres:{' '}
          {genres ? genres.map((genre) => genre.name).join(', ') : []}
        </p>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieView;
