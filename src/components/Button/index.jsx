import './index.scss';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({ name, type, isDisabled, onClick }) => (
  // <button style={{backgroundColor: type === 'primary' ? 'blue' : (isDisabled ? 'pink' : 'green')}}>Add</button>
  <button
    className={classNames('button', {
      'button--secondary': type === 'secondary',
    })}>
    Add
  </button>
);

Button.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
