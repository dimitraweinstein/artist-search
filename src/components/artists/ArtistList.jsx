import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => (
  <ul>
    {artists.map((artist) => (
      <li key={artist.id}>
        <Artist
          name={artist.name}
          country={artist.country}
          genre={artist.genre}
        />
      </li>
    ))}
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    }).isRequired
  ),
};

export default ArtistList;
