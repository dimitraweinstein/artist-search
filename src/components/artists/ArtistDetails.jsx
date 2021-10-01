import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetails = ({ name, type, description }) => (
  <figure>
    <p>
      {name}
    </p>
    <figcaption>
      {type}
    </figcaption>
    <p>
      {description}
    </p>
  </figure>
);

ArtistDetails.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  description: PropTypes.string
};

export default ArtistDetails;
