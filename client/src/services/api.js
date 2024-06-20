import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (username, password) => {
  return axios.post(`${API_URL}/auth/login`, { username, password });
};

export const getCatways = async () => {
  return axios.get(`${API_URL}/catways`);
};

export const getReservations = async () => {
  return axios.get(`${API_URL}/reservations`);
};

// Ajoutez d'autres fonctions d'appel API selon vos besoins
