import React, { useState, useEffect } from 'react';
// eslint-disable-next-line max-len
import { getAllArtists, getArtistsByQuery, getArtistMusicById } from '../services/artistApiSearch';
import Search from '../components/SearchControls';
import ArtistList from '../components/artists/ArtistList';
// import { useParams } from 'react-router-dom';

export const ArtistSearch = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchedArtists, setSearchedArtists] = useState([]);
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [query, setQuery] = useState('');
  // const { id } = useParams();

  // let artistDataPromise = [];
  // let filteredMusicDataPromise = null;
  // let searchedArtistDataPromise = null;

  useEffect(() => {
    const loadArtists = async () => {
      const artistsFromApi = await getAllArtists();
      setArtists(artistsFromApi);
      setLoading(false);
    };
    loadArtists();
  }, []);

  // useEffect(() => {
  //   filteredMusicDataPromise = getArtistMusicById();
  // }, []);

  // useEffect(() => {
  //   searchedArtistDataPromise = getArtistsByQuery(query);
  // }, [query]);
  
  Promise.all([
    // artistDataPromise,
    // filteredMusicDataPromise,
    // searchedArtistDataPromise,
  ])
    .then(() => ({
      setArtists,
      setSearchedArtists,
      setFilteredMusic,
    }))
    .finally(() => setLoading(false));

    
  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  if(loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner" />;

  return (
    <>
      <Search
        query={query}
        onQuery={handleQuery}
      />
      <ArtistList
        artists={artists}
        query={query}
        searchedArtists={searchedArtists}
        filteredMusic={filteredMusic}
      />
    </>
  );
};


