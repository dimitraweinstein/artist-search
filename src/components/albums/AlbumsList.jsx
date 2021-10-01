import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumsList = ({ releases }) => {
  return (
    <>
      {/* div for pagination here */}
      <ul>
        {releases.map((release) => (
          <li key={release.id}>
            <Album {...release} />
          </li>
        ))}
      </ul>
    </>
  );
};


AlbumsList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string
    })
  )
};

export default AlbumsList;
