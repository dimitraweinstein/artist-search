import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumsList = ({ albums }) => {
  console.log(albums, 'the release');
  return (
    <>
      {/* div for pagination here */}
      <ul>
        {albums.map((album) => (
          <li key={album.id} style={{ listStyleType: 'none' }}>
            <Link to={`/${album.id}`}>
              <Album {...album} />
            </Link>
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
