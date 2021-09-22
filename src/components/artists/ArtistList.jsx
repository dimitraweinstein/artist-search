import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => (
  <ul>
    {artists.map((artist) => (
      <li key={artist.id}>
        <Artist {...artist} />
      </li>
    ))}
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ArtistList;
