import axios from 'axios';
import { toast } from 'react-toastify';
import { accessCookie } from './utils';

const http = axios.create({
  baseURL: 'TODO : <Base url>',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache'
  }
});

http.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${accessCookie('TODO : <your auth cookie name>')}`;
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // TODO : change error message if you want to
    toast.error('Something went wrong !');
    return Promise.reject(error);
  }
);

export default http;
