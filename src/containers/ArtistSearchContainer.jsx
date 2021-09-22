import React, { useState, useEffect } from 'react';
import { getAllArtists, getArtistsByQuery, getArtistMusicById } from '../services/artistApiSearch';
import ArtistList from '../components/artists/ArtistList';

export const ArtistSearch = () => {
  const [ loading, setLoading ] = useState(true);
  // const [ query, setQuery ] = useState('');
  const [ artists, setArtists ] = useState([]);

  // useEffect(() => (), [])

  if (loading) return <h1>Loading...</h1>;

  return (
    <ArtistList
      artists={artists}
    />
  );
};

