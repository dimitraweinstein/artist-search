export const getAllArtists = async () => {
  try {
    const res = await fetch(
      'https://musicbrainz.org/ws/2/artist?query=?&fmt=json&limit=25'
    );
    const fetchedArtists = await res.json();
      
    console.log(fetchedArtists, 'all the artists');

    return fetchedArtists.artists;
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
    const searchedArtists = await res.json();

    console.log(searchedArtists, 'the searched artists');
  
    return searchedArtists.artists;
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return [];
  }
};

export const getArtistMusicById = async (req) => {
  const { id } = req.params;
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
    );
    const albums = await res.json();

    const res2 = await fetch(
      `https://coverartarchive.org/release/${id}/front`
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
