export const getArtist = async (artist, page) => {
  try {
    const offset = (page - 1) * 26;
    const res = await fetch(
      // eslint-disable-next-line max-len
      `https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&inc=1&offset=${offset}`,
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

export const getArtistById = async (id) => {
  try {
    const res = await fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json`,
      {
        method: 'GET'
      });
    const artist = await res.json();
    const artistObj = {
      id: artist.id,
      type: artist.type,
      name: artist.name,
      description: artist.disambiguation
    };
    return artistObj;
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return {};
  }
};

export const getAlbums = async (id) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`,
      {
        method: 'GET'
      }
    );
    const json = await res.json();
    console.log(json, 'albums');
    return json;
  } catch (error) {
    console.error((`Error getting artist: ${error.message}`));
    return [];
  }
};


// const res2 = await fetch(
//       `https://coverartarchive.org/release/${id}/front`
//     );
//     const coverArt = await res2.json();

