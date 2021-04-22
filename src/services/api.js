import axios from 'axios';

export const key = '96cbf4ee';

const api = axios.create({
   baseURL: 'https://api.hgbrasil.com'
});

export default api;