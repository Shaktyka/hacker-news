import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {onClick, className = ``, children} = props;

  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: ``,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
