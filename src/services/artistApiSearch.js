
export const getArtists = async () => {
  const artistArray = [];
  try {
    const res = await fetch(
      'http://musicbrainz.org/ws/2/artist?query=%3CSEARCH%3E&fmt=json&limit=25'
    );
    const artists = await res.json();
    
    const res2 = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${artists.artist.id}&fmt=json`
    );

    const albums = await res2.json();

    return artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      country: artist.area.name,
      genre: artist.disambiguation,
    })), albums.map((album) => ({
      artistId: artists.artist.id,
      albumId: album.releases.id,
      title: album.releases.title,
      releaseYear: album.releases.date
    })).push(artistArray);
    
      
      
      
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return [] || artistArray;
  }
};

// ** This will be used to map over artistArray once all fetch calls are made.**
// .then(artists.map((artist) => ({
//   id: artist.id,
//   name: artist.name,
//   country: artist.area.name,
//   genre: artist.disambiguation,
//   // Albums Data added to artist object here.
// })));
