import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return {};
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
