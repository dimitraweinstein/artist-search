import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetails = ({ name, type, description, albums }) => (
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
    <ul>
      {albums.map((album) => (
        <li key={album.releases.id}>
          
        </li>))}
    </ul>
  </figure>
);

ArtistDetails.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  description: PropTypes.string,
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired
    }).isRequired
  )
};

export default ArtistDetails;
