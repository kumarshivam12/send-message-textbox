import axios from 'axios';
import { toast } from 'react-toastify';
import { accessCookie } from './utils';

const http = axios.create({
  baseURL: 'http://58e6-2405-201-a40b-98da-70fd-4d6c-6ed9-f6ab.ngrok-free.app/',
  headers: {
    'Content-Type': 'multipart/form-data'
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
