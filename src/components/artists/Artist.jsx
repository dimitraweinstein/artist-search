import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, type, description }) => (
  <figure>
    <p>
      {name} - {type}
    </p>
    <p>
      {description}
    </p>
    {/* Link to Albums list Here */}
  </figure>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  description: PropTypes.string,
};

export default Artist;
