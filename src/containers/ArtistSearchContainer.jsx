import React, { useState, useEffect } from 'react';
import { getAllArtists } from '../services/artistApiSearch';
import Search from '../components/SearchControls';
import ArtistList from '../components/artists/ArtistList';



export const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  // const [searchedArtists, setSearchedArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const loadArtists = async () => {
      const artistsFromApi = await getAllArtists();
      setArtists(artistsFromApi);
      setLoading(false);
    };
    loadArtists();
  }, []);
  
  useEffect(() => {
    setFilteredArtists(
      artists.filter((artist) => 
        artist.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    );
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
        filteredArtists={filteredArtists}
      />
    </>
  );
};


