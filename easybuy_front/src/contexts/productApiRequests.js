import axios from "axios";
const url = "http://localhost:3001/product";

export const addProduct = async (newProduct) => {
  const response = await axios.post(`${url}`, newProduct);
  return response.data;
};

export const updateProduct = async (productData) => {
  const response = await axios.put(`${url}`, productData);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${url}`, id);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${url}`);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${url}`, id);
  return response.data;
};
