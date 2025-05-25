import axios from "axios";

export const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'https://my-backend.azurewebsites.net';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Enable sending credentials (if required by backend)
});

// Set Authorization header only if JWT exists
const jwt = localStorage.getItem("jwt");
if (jwt) {
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export default api;
