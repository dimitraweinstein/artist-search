import React from 'react';
import PropTypes from 'prop-types';

const Album = (release) => {
  const { title, date, image } = release;
  return (
    <>
      <img
        src={image}
        alt={title + 'cover art'}
        width="350vw"
        onError={(event) => (
        // eslint-disable-next-line max-len
          event.target.src = 'http://www.cloonam.com/static/music/Cant%20Take%20My%20Eyes%20Off%20You%20/Unknown%20album/art.jpg'
        )} />
      <p>
        {title} - {date}
      </p>
    </>);
};

Album.propTypes = {
  release: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.image,
    title: PropTypes.string.isRequired,
    date: PropTypes.string
  }),
  artist: PropTypes.string,
  onError: PropTypes.func
};

export default Album;
