import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button';

const Sort = (props) => {
  const { sortKey, onSort, children, activeSortKey } = props;

  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey}
  );

  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}
    >
      {children}
    </Button>
  );
};

Sort.propTypes = {
  activeSortKey: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSort: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
};

export default Sort;
