import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '../button';
import TableHeader from '../table-header';

import {SORTS} from '../../constants.js';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortKey: `NONE`,
      isSortReverse: false,
    };
  };

  onSort = (sortKey) => {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  };

  render() {
    const { list, onDismiss } = this.props;

    const {
      sortKey,
      isSortReverse,
    } = this.state;

    const sortedList = SORTS[sortKey](list);

    const reverseSortedList = isSortReverse
      ? sortedList.reverse()
      : sortedList;

    return (
      <div className="table">
        {
          <TableHeader
            onSort={this.onSort}
            sortKey={sortKey}
          />
        }
        {reverseSortedList.map((item) => {
          return (
          <div key={item.objectID} className="table-row">
            <span style={{ width: '35%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: '15%' }}>{item.author}</span>
            <span style={{ width: '20%' }}>{moment(item.created_at).format("DD-MM-YYYY")}</span>
            <span style={{ width: '10%' }}>{item.num_comments}</span>
            <span style={{ width: '10%' }}>{item.points}</span>
            <span style={{ width: '10%' }}>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Удалить
              </Button>
            </span>
          </div>
          );
        })}
      </div>
    );
  };
}

Table.defaultProps = {
  list: [],
};

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
