import React from 'react';

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

export default Button;
