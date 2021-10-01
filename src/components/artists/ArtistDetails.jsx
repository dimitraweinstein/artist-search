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
  description: PropTypes.string,
  release: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired
  )
};

export default ArtistDetails;
