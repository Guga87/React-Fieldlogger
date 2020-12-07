import axios from 'axios';

const api= axios.create({
    //Api baseada em elstic search
    baseURL: 'http://192.168.15.208:4000'
});

export default api;