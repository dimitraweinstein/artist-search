import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists, filteredArtists, searchTerm }) => {
  const artistsToDisplay = filteredArtists.length ? filteredArtists : artists;
  
  if (searchTerm && !filteredArtists.length) return <h3>No Artists Found</h3>;

  return(
    <ul>
      {artistsToDisplay.map((artist) => (
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
    name: PropTypes.string.isRequired,
    disambiguation: PropTypes.string,
  })
).isRequired;

ArtistList.propTypes = {
  artists: artistsProp,
  filteredArtists: artistsProp,
  searchTerm: PropTypes.string.isRequired,
};

export default ArtistList;
