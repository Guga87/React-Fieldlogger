import axios from 'axios';

const api= axios.create({
    baseURL: 'http://romiotto.dyndns.info:5000'
});

export default api;