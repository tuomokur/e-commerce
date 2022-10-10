import axios from "axios";
import { getAuthHeader } from "./authHeader";
const url = "http://localhost:3001/category";

export const addCategory = async (token, newcategory) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.post(`${url}`, newcategory, authHeader);
  return response.data;
};

export const getCategory = async (token, id) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.get(`${url}`, id, authHeader);
  return response.data;
};

export const getCategories = async (token) => {
  const authHeader = getAuthHeader(token);
  const response = await axios.get(`${url}`, authHeader);
  return response.data;
};
