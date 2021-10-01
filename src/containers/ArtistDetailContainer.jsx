import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArtistDetails from '../components/artists/ArtistDetails';
import { getArtistById } from '../services/artistApiSearch';

export const ArtistDetail = () => {
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState({});
  const { id } = useParams();
  
  useEffect(() => (
    getArtistById(id)
      .then((artist) => {
        setArtist(artist);
        console.log(artist);
      })
      .finally(() => setLoading(false))
  ), []);

  if(loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner" />;
  
  return (
    <>
      <ArtistDetails
        {...artist}
      />
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};
