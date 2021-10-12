import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-inventory-control.herokuapp.com/'
});

export default api;
