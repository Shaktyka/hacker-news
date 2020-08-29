import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  };

  render () {
    const {value, onChange, onSubmit, children} = this.props;

    return (
      <form onSubmit={onSubmit}>
        {children}
        <input
          type="search"
          onChange={onChange}
          value={value}
          ref={(node) => { this.input = node; }}
        />
        <button
          type="submit"
        >
          {children}
        </button>
      </form>
    );
  };
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Search;
