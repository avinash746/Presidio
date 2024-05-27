import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

export const fetchProperties = () => API.get('/properties/');
export const createProperty = (newProperty) => API.post('/properties/', newProperty);
export const updateProperty = (id, updatedProperty) => API.patch(`/properties/${id}/`, updatedProperty);
export const deleteProperty = (id) => API.delete('/properties/${id}/');
export const registerUser = (userData) => API.post('/register/', userData);
export const loginUser = (userData) => API.post('/login/', userData);
