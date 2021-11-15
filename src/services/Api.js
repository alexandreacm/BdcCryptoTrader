import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { API_KEY } from '@env';

const api = axios.create({
  baseURL: 'https://api.coincap.io/v2',
  timeout: 1000,
  headers: { Authorization: `bearer ${API_KEY}` }
});

//api.defaults.timeout = 60 * 0.3 * 1000; // 30 sec
//axios.defaults.headers.common = { Authorization: `bearer ${API_KEY}` };

export default api;
