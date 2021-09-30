export const getArtist = async (artist) => {
  try {
    // const offset = (page - 1) * 26;
    const res = await fetch(
      // eslint-disable-next-line max-len
      `https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`,
      {
        method: 'GET'
      }
    );
    const json = await res.json();
    console.log(json, 'the json');
    const artistsArray = json.artists.map((artist) => ({
      id: artist.id,
      type: artist.type,
      name: artist.name,
      description: artist.disambiguation
    }));
    console.log(artistsArray, 'artists');
    return artistsArray;
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
