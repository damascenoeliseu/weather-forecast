import axios from 'axios';

export const key = '<HG Brasil Key>';

const api = axios.create({
   baseURL: 'https://api.hgbrasil.com'
});

export default api;