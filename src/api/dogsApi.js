import axios from 'axios';

const BASE_URL =process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL: BASE_URL });
console.log("url",BASE_URL)

export const fetchAllDogs   = ()           => api.get('/getAllDogs');
export const fetchDogBreed  = (breed)      => api.get(`/${breed}`);
export const createDog      = (dog)        => api.post('/createDog', dog);
export const updateDog      = (id, dog)    => api.put(`/${id}`, dog);
export const deleteDog      = (id)         => api.delete(`/${id}`);
