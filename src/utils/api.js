import http from './http';

const formData = new FormData();

export const postMessage = (data) => {
  formData.append('message', data.message);
  return http.post('/', formData);
};
