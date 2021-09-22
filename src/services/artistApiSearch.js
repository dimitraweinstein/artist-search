
export const getAllArtists = async () => {
  try {
    const res = await fetch(
      'https://musicbrainz.org/ws/2/artist?query=?&fmt=json&limit=25'
    );
    const allArtists = await res.json();

    return allArtists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      description: artist.disambiguation,
      genre: artist.tags[ 0 ].name,
      country: artist.area.name,
    }));
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return [];
  }
};

export const getArtistsByQuery = async (artistQuery) => {
  try {
    const res = await fetch(
      // eslint-disable-next-line max-len
      `http://musicbrainz.org/ws/2/artist?query=${artistQuery}&fmt=json&limit=25`
    );
    const artists = await res.json();
  
    return artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      description: artist.disambiguation,
      country: artist.area.name,
    }));
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return [];
  }
};

export const getArtistMusicById = async (artistId) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`
    );
    const albums = await res.json();

    const res2 = await fetch(
      `https://coverartarchive.org/release/${releaseId}/front`
    );
    const coverArt = await res2.json();

    albums.map((album) => ({
      id: album.releases.id,
      title: album.releases.title,
      releaseDate: album.releases.date,
      coverArt: coverArt.map((cover) => ({
        id: cover.releases.id,
      }))
    }));
  
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return [];
  }
};
