// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const getCatways = async () => {
  return axios.get(`${API_URL}/catways`);
};

export const getReservations = async () => {
  return axios.get(`${API_URL}/reservations`);
};

export const createCatway = async (data) => {
  return axios.post(`${API_URL}/catways`, data);
};

export const updateCatway = async (id, data) => {
  return axios.put(`${API_URL}/catways/${id}`, data);
};

export const deleteCatway = async (id) => {
  return axios.delete(`${API_URL}/catways/${id}`);
};

export const createReservation = async (data) => {
  return axios.post(`${API_URL}/reservations`, data);
};

export const deleteReservation = async (id) => {
  return axios.delete(`${API_URL}/reservations/${id}`);
};

// Ajoutez d'autres fonctions d'appel API selon vos besoins
