import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://amazoncopy-grafica.herokuapp.com/',
    baseURL: 'http://192.168.15.8:3000',
})

export default api;