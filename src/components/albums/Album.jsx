import React from 'react';
import PropTypes from 'prop-types';

const Album = (release) => {
  const { title, releaseDate } = release;
  return (
    <p>
      {title} - {releaseDate}
    </p>);
};

Album.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
  }),
  artist: PropTypes.string
};

export default Album;
