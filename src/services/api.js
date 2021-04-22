import axios from 'axios';

//Another key: 435ca895
export const key = '96cbf4ee';

const api = axios.create({
   baseURL: 'https://api.hgbrasil.com'
});

export default api;