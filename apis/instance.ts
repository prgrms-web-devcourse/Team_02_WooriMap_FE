import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.79.88.242/api',
});

export default instance;
