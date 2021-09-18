import axios from 'axios';
const axiosIntance = axios.create({
    baseURL: 'http://3.108.193.247:2000/api/product/',
});

export default axiosIntance;
