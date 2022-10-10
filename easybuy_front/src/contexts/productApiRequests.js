import axios from "axios";
import { getAuthHeader } from "./authHeader";
const url = "http://localhost:3001/product";

export const addProduct = async (token, newProduct) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.post(`${url}`, newProduct, authHeader);
  return response.data;
};

export const updateProduct = async (token, productData) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.put(`${url}`, productData, authHeader);
  return response.data;
};

export const getProduct = async (token, id) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.get(`${url}`, id, authHeader);
  return response.data;
};

export const getProducts = async (token, search, categoryName) => {
  const authHeader = getAuthHeader(token);
  console.log({ token, authHeader });
  const response = await axios.get(`${url}`, {
    ...authHeader,
    params: { search: search, categoryName: categoryName },
  });
  return response.data;
};

export const deleteProduct = async (token, id) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.delete(`${url}`, id, authHeader);
  return response.data;
};
