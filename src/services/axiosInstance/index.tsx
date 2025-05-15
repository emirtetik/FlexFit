import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_KEY, API_URL } from '../../config/envConfig';

interface Headers {
  [key: string]: string;
}

interface InstanceProps extends AxiosRequestConfig {
  headers: Headers;
}
console.log('URL', API_URL)
console.log('KEY', API_KEY)

const axiosInstance: InstanceProps = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const instance: AxiosInstance = axios.create(axiosInstance);

export default instance;