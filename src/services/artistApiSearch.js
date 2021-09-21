export const getArtists = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('http://musicbrainz.org/ws/2/artist?query=%3CSEARCH%3E&fmt=json&limit=25');
  const artists = await res.json();
  
  return artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
    country: artist.area.name,
    genre: artist.disambiguation,
  }));
};

