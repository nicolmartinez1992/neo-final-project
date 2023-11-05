import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from 'Components/Loading';
import getCategories from '../../api/filters';
import './index.scss';

const Filters = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error retrieving data', error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="filters">
        <div className="filters__categories-container">
          {categories.map((category) => (
            <Link
              to={`/category/${category}`}
              key={category}
              className="filters__categories">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Filters;
