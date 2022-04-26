import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8001'
});

export const getAllCards = payload => api.get(`/dating/cards`, payload);

const apis = {
    getAllCards,
};

export default apis;