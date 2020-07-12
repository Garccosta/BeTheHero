import axios from 'axios';

const api = axios.create({
    baseURL: 'http://"your_ip_address":3333'
});

export default api;
