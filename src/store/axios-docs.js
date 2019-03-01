import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export default instance;