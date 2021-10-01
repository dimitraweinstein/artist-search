import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArtistDetails from '../components/artists/ArtistDetails';
import { getArtistById, getAlbums } from '../services/artistApiSearch';
import AlbumsList from '../components/albums/AlbumsList';

export const ArtistDetail = () => {
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState({});
  const [releases, setReleases] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getArtistById(id)
      .then(artistObj => setArtist(artistObj))
      .then(() => getAlbums(id))
      .then(albumsArray => setReleases(albumsArray))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner" />;
  
  return (
    <>
      <ArtistDetails
        {...artist}
        {...releases}
      />
      <AlbumsList
        {...releases}
      />
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};
