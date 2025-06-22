import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getProducts = () => axiosInstance.get(API_URL);

export const getProductById = (id) => axiosInstance.get(`${API_URL}/${id}`);

export const createProduct = (product) => axiosInstance.post(API_URL, product);

export const updateProduct = (id, product) => axiosInstance.put(`${API_URL}/${id}`, product);

export const deleteProduct = (id) => axiosInstance.delete(`${API_URL}/${id}`);
