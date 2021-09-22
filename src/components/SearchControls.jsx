import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ query, onQueryChange }) => (
  <>
    <label htmlFor="query">Search: {' '}</label>
    <input
      id="query"
      type="text"
      value={query}
      onChange={onQueryChange}
    />
  </>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.string.isRequired
};

export default Search;
