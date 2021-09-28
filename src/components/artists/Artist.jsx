import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, disambiguation }) => (
  <figure>
    <p>
      {name} - {disambiguation}
    </p>
    {/* Link to Albums list Here */}
  </figure>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string,
};

export default Artist;
