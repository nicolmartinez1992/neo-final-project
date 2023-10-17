import React, { useEffect, useState } from 'react';
import getMovies from '../../pages/peliculas';
import Movie from '../../components/Movie';
import './index.scss';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovies()
      .then((movie) => {
        setMovies(movie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    const filterResult = movies.filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(filterResult);
  };

  return (
    <div className="input-container">
      <input
        className="movie-search"
        type="text"
        placeholder="Ingrese una película"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <div className="filtered-movies">
        {searchResults.map((movie) => (
          <Movie {...movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
