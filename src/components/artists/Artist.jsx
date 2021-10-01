import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, description }) => (
  <p>
    {name} - {description}
  </p>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Artist;
