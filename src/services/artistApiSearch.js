export const getArtists = () => {
  // eslint-disable-next-line max-len
  return fetch('http://musicbrainz.org/ws/2/artist?query=%3CSEARCH%3E&fmt=json&limit=25')
    .then((res) => res.json())
    .then((json) =>
      json.artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
        country: artist.area.name,
        genre: artist.disambiguation,
      }))
    );
};

