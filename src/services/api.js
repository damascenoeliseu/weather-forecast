import axios from 'axios';

export const key = '435ca895';

const api = axios.create({
   baseURL: 'https://api.hgbrasil.com'
});

export default api;