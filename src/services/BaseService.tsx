import { showError } from "../lib/toastify";
import instance from "./axiosInstance" 

export const BaseService = {
  get: async (path:string) => {
    try {
      const response = await instance.get(path)
      return response.data;
    } catch (error) {
      if (error) {
        showError('İsteğiniz başarısız oldu.');
      } else {
        throw error;
      } 
    }
  },
};