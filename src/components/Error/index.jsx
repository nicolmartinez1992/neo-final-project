import React from 'react';
import './index.scss';
import error from '../../assets/images/error.png';

const Error = () => (
  <div className="error">
    <img className="error__image" src={error} alt="error404" />
  </div>
);

export default Error;
