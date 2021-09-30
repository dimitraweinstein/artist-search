import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => {

  return(
    <ul>
      {artists.map((artist) => (
        <li key={artist.id} style={{ listStyleType: 'none' }}>
          <Artist {...artist} />
        </li>
      ))}
    </ul>
  );
};

const artistsProp = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  })
).isRequired;

ArtistList.propTypes = {
  artists: artistsProp,
  searchTerm: PropTypes.string.isRequired,
};

export default ArtistList;
