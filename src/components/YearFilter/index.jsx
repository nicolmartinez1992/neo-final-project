import React, { useEffect, useState } from 'react';
import getMovies from '../../pages/peliculas';
import './index.scss';
import Movie from '../../components/Movie';

const YearFilter = () => {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterYears = (data) => {
    const yearsSet = new Set();

    for (let i = 0; i < data.length; i += 1) {
      yearsSet.add(data[i].releaseYear);
    }

    setYears(Array.from(yearsSet));
  };

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data);
        filterYears(data);
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
      });
  }, []);

  const handleFilter = () => {
    const filtered = movies.filter(
      (movie) => parseInt(movie.releaseYear, 10) === selectedYear,
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <select
        className="select-menu"
        value={selectedYear}
        onChange={(e) =>
          setSelectedYear(parseInt(e.target.value, 10))
        }>
        <option>Seleccione un año</option>
        {years.map((year) => (
          <option onClick={handleFilter}>{year}</option>
        ))}
      </select>
      {filteredMovies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default YearFilter;
