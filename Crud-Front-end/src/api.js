import { create } from 'axios';

const api = create({
  baseURL: ' http://172.18.0.2:3000',
});

export default api;