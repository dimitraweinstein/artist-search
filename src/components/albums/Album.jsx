import React from 'react';
import PropTypes from 'prop-types';

const Album = (release) => {
  const { title, date } = release;
  return (
    <p>
      {title} - {date}
    </p>);
};

Album.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string
  }),
  artist: PropTypes.string
};

export default Album;
