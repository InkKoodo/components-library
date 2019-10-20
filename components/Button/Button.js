import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type }) => {
  return (
    <button type={type}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button;