import axios from 'axios';
import { Message } from 'element-ui';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'?'//creationapi.shbwyz.com': 'https://creationapi.shbwyz.com',
    timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 相应拦截器
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response: ', response)
    if (response.status === 200){
        return response.data.data;
    }else if (response.status === 201){
        return 'success';
    }else {
        Message.error(response.data.msg || response.statusText)
    }

    // return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// 抛出instance
export default instance;