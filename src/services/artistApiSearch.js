export const getArtist = async (artist, page) => {
  try {
    const offset = (page - 1) * 26;
    const res = await fetch(
      // eslint-disable-next-line max-len
      `https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&inc=5&offset=${offset}`,
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
    const albumsArray = json.releases.map(async (release) => {
      const coverArt = await getCoverArt(release.id);
      return {
        id: release.id,
        image: coverArt,
        title: release.title,
        date: release.date
      };
    });
    console.log(albumsArray, 'albums with art');
    const resolvedAlbums = await Promise.all(albumsArray);
    console.log(resolvedAlbums, 'albums resolved');
    return resolvedAlbums;
  } catch (error) {
    console.error((`Error getting album: ${error.message}`));
    return [];
  }
};

export const getCoverArt = async (id) => {
  try {
    const res = await fetch(`https://coverartarchive.org/release/${id}/front`, {
      method: 'GET'
    }
    );
    const cover = res.url;
    console.log(cover, 'cover art');
    return cover;
  } catch (error) {
    console.error(`Error getting cover art: ${error.message}`);
    // eslint-disable-next-line max-len
    return 'http://www.cloonam.com/static/music/Cant%20Take%20My%20Eyes%20Off%20You%20/Unknown%20album/art.jpg';
  }
};
