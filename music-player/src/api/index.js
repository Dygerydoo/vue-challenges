import axios from 'axios';

const DEEZER_BASE = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

export const search = query => axios.get('/search', {
  baseURL: DEEZER_BASE,
  params: {
    q: query,
    limit: 50,
  },
});

export const fetchUser = id => axios.get(`/artist/${id}`, {
  baseURL: DEEZER_BASE,
});
