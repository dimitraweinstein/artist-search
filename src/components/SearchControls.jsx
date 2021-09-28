import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ query, onQuery }) => (
  <>
    <label htmlFor="query">Search: {' '}</label>
    <input
      id="query"
      type="text"
      value={query}
      onChange={onQuery}
    />
  </>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired
};

export default Search;
