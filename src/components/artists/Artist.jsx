import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, country, genre }) => (
  <figure>
    <p>
      {name} - {genre}
    </p>
    {/* Link to Albums list Here */}
    <figcaption>
      {country}
    </figcaption>
  </figure>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default Artist;
