import getMovies from '../../pages/peliculas';
import './index.scss';
import React, { useEffect, useState } from 'react';

const YearFilter = () => {
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  //   const [selectedYear, setSelectedYear] = useState();

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

  return (
    <select className="select-menu">
      {years.map((year) => (
        <option>{year}</option>
      ))}
    </select>
  );
};

export default YearFilter;
