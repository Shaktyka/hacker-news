import React from 'react';
import Button from '../button/button.js';

const Sort = ({ sortKey, onSort, children }) => {
  return (
    <Button
      onClick={() => onSort(sortKey)}
      className="button-inline"
    >
      {children}
    </Button>
  );
};

export default Sort;
