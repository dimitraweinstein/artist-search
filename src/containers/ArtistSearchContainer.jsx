import React, { useState, useEffect } from 'react';
import { getArtist } from '../services/artistApiSearch';
import Search from '../components/SearchControls';
import ArtistList from '../components/artists/ArtistList';

export const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      setLoading(false);
      return;
    }
    const loadArtists = async () => {
      const artistsFromApi = await getArtist(searchTerm);
      setArtists(artistsFromApi);
      setLoading(false);
    };
    loadArtists();
  }, [searchTerm]);
    
  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  if(loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner" />;

  return (
    <>
      <Search
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />
      <ArtistList
        artists={artists}
        searchTerm={searchTerm}
        // filteredArtists={filteredArtists}
      />
    </>
  );
};


