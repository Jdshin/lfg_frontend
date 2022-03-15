import axios from 'axios';
import { backend_url } from './strings/strings';

const axiosInstance = axios.create({
    baseURL: backend_url,
    timeout: 5000,
    headers: {
        'Authorization': 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default axiosInstance;