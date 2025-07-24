import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://python-api-csv.onrender.com/', 
});
