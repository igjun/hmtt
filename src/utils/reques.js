import axios from 'axios';
import store from '@/store';
const request = axios.create({
  baseURL: 'http://toutiao-app.itheima.net',
});
request.interceptors.request.use(
  function (config) {
    // 对响应数据做点什么
    const { user } = store.state;
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default request;
