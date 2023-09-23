// src/api/api.js
import axios from 'axios';

const API_URL = 'your_backend_api_url_here';

const api = axios.create({
  baseURL: API_URL,
});

export default api;