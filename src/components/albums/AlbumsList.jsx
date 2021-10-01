import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumsList = ({ albums }) => {
  console.log(albums, 'the release');
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


AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.image,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string
    })
  )
};

export default AlbumsList;
