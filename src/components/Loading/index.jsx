import React from 'react';
import './index.scss';
import { Circles } from 'react-loader-spinner';

const Loading = () => (
  <div className="loading">
    <span className="loading__title">Loading...</span>
    <Circles
      className="loading__spinner"
      height="100"
      width="100"
      color="rgb(188, 165, 203)"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      marginTop="20px"
    />
  </div>
);

export default Loading;
