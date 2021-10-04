import React from 'react';
import PropTypes from 'prop-types';

const Song = (recording) => {
  const { title } = recording;
  return (
    <p>
      {title}
    </p>
  );
};

Song.propTypes = {
  recording: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  album: PropTypes.string
};

export default Song;

