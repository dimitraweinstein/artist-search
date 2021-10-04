import React, { useState, useEffect } from 'react';
import Song from './Song';
import { getRecordings } from '../../services/artistApiSearch';
import { useParams } from 'react-router-dom';

export const SongList = () => {
  const [loading, setLoading] = useState(true);
  const [recordings, setRecordings] = useState([]);
  const { id } = useParams();

  useEffect(() => (
    getRecordings(id)
      .then(songlistArray => setRecordings(songlistArray))
      .then(console.log(recordings, 'the songlist'))
      .then(() => setLoading(false))
  ), []);

  if (loading) return <img
    // eslint-disable-next-line max-len
    src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    alt="loading spinner" />;
  
  return (
    <ul>
      {recordings.map((recording) => (
        <li key={recording.id}>
          <Song {...recordings} />
        </li>
      ))}
    </ul>
  );
};
