const BASE_URL = "https://api.spotify.com/v1";

// uses Spotify's Search API to search artists by artist1, artist2 and artist3
const searchArtist1 = async (http, { artist1 }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?type=artist&q=${artist1}`
  };

  return http(config).then(res => res.data);
};

const searchArtist2 = async (http, { artist2 }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?type=artist&q=${artist2}`
  };

  return http(config).then(res => res.data);
};
const searchArtist3 = async (http, { artist3 }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?type=artist&q=${artist3}`
  };

  return http(config).then(res => res.data);
};

/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (http, { artistId1, artistId2, artistId3 }) => {  
  const config = {
    method: 'get',
    url: `${BASE_URL}/recommendations?seed_artists=${artistId1},${artistId2},${artistId3}`,
  };

  return http(config)
    .then((res) => res.data);
}

module.exports = { searchArtist1, searchArtist2, searchArtist3, getRecommendations }