import axios from 'axios';

// URL base de tu API en Laravel
const API_URL = 'http://127.0.0.1:8000/api/citas';

/**
 * Obtiene todas las citas de la API con opción de filtro por búsqueda.
 */
export const getAll = async (search = '') => {
  const response = await axios.get(API_URL, {
    params: { search }
  });
  return response.data;
};

/**
 * Obtiene una cita específica por su ID.
 */
export const getById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

/**
 * Crea una nueva cita.
 */
export const create = async (citaData) => {
  const response = await axios.post(API_URL, citaData);
  return response.data;
};

/**
 * Actualiza una cita existente.
 */
export const update = async (id, citaData) => {
  const response = await axios.put(`${API_URL}/${id}`, citaData);
  return response.data;
};

/**
 * Elimina una cita por su ID.
 */
export const deleteCita = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// Objeto agrupado para la exportación por defecto
const citasService = {
  getAll,
  getById,
  create,
  update,
  delete: deleteCita,
};

export default citasService;