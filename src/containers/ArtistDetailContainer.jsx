import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Artist from '../components/artists/Artist';
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
      <Artist
        {...artist}
      />
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};
