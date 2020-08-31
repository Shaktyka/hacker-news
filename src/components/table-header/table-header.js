import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../sort';

const TableHeader = (props) => {
  const {onSort, sortKey} = props;

  return (
    <div className="table-header">
      <span style={{ width: '35%' }}>
        <Sort
          sortKey={'TITLE'}
          onSort={onSort}
          activeSortKey={sortKey}
        >
          Заголовок
        </Sort>
      </span>
      <span style={{ width: '15%' }}>
        <Sort
          sortKey={'AUTHOR'}
          onSort={onSort}
          activeSortKey={sortKey}
        >
          Автор
        </Sort>
      </span>
      <span style={{ width: '20%' }}>
        <Sort
          sortKey={'DATA'}
          onSort={onSort}
          activeSortKey={sortKey}
        >
          Дата публикации
        </Sort>
      </span>
      <span style={{ width: '10%' }}>
        <Sort
          sortKey={'COMMENTS'}
          onSort={onSort}
          activeSortKey={sortKey}
        >
          Комментарии
        </Sort>
      </span>
      <span style={{ width: '10%' }}>
        <Sort
          sortKey={'POINTS'}
          onSort={onSort}
          activeSortKey={sortKey}
        >
          Очки
        </Sort>
      </span>
      <span style={{ width: '10%' }}>
        Архив
      </span>
    </div>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
};

export default TableHeader;
