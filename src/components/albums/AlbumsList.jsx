import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumsList = ({ albums }) => {
  return (
    <>
      {/* div for pagination here */}
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Album {...album} />
          </li>
        ))}
      </ul>
    </>
  );
};

const albumsProp = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  })
);

AlbumsList.propTypes = {
  albums: albumsProp
};

export default AlbumsList;
