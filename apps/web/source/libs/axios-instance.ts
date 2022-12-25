import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3003/',
    timeout: 1000,
  });


export const swrFetcher = Object.freeze({
  get: (url:string) => {
    return axiosInstance.get(url).then(data => data.data)
  }
})


export default axiosInstance;