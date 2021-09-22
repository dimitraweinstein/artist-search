import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, country, description, genre }) => (
  <figure>
    <p>
      {name} - {description}
    </p>
    <p> {genre}</p>
    {/* Link to Albums list Here */}
    <figcaption>
      {country}
    </figcaption>
  </figure>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Artist;
