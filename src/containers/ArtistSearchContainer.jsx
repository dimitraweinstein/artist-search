import React, { useState, useEffect } from 'react';
import Search from '../components/SearchControls';
import ArtistList from '../components/artists/ArtistList';
import { getArtist } from '../services/artistApiSearch';
import { useParams } from 'react-router-dom';

export const ArtistSearch = () => {
  let { thePage } = useParams();
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  if (thePage) {
    thePage = +thePage;
  } else {
    thePage = 1;
  }
  const [page] = useState(thePage);
  
  useEffect(() => {
    if (!searchTerm) {
      setLoading(false);
      return;
    }
    getArtist(searchTerm, page)
      .then((artists) => setArtists(artists))
      .then(() => setLoading(false));
  }, [searchTerm]);
    
  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handlePage = (number) => {
    location.replace(`/${searchTerm}/${page + number}`);
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
        page={page}
        handlePage={handlePage}
      />
    </>
  );
};


