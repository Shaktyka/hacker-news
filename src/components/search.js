import React from 'react';

const Search = (props) => {
  const {value, onChange, onSubmit, children} = props;

  return (
    <form onSubmit={onSubmit}>
      {children}
      <input
        type="search"
        onChange={onChange}
        value={value}
      />
      <button
        type="submit"
      >
        {children}
      </button>
    </form>
  );
};

export default Search;
