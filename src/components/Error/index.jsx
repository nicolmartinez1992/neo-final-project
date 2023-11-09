import React from 'react';
import './index.scss';
import { PropTypes } from 'prop-types';

const Error = ({ title, image }) => {
  return (
    <div className="error">
      <h1 className="error__title">{title}</h1>
      <img className="error__image" src={image} alt="error" />
    </div>
  );
};

export default Error;

Error.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
