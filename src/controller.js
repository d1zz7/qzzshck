const axios = require('axios');

export const apiBaseUrl = 'https://hammerhead-app-86u8r.ondigitalocean.app';
export const apiLocalUrl = 'http://localhost:5555';

export const controller = axios.create({
  baseURL: apiBaseUrl,
  responseType: 'json',
});
