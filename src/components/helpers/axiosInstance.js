import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dusanabe.torokbence-dev.hu/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;