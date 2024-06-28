// utils/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', // Koa 服务器的地址
});

export default instance;
