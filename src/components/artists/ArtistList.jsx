import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists, page, handlePage }) => {

  return (
    <>
      <div>
        <button
          onClick={() => handlePage(-1)}
        >
          {page - 1}
        </button>
        <button
          onClick={() => handlePage(+1)}
        >
          {page + 1}
        </button>
      </div>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id} style={{ listStyleType: 'none' }}>
            <Link to={`/${artist.id}`}>
              <Artist {...artist} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const artistsProp = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
  })
).isRequired;

ArtistList.propTypes = {
  artists: artistsProp,
  searchTerm: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired
};

export default ArtistList;
