import axios from "axios";
const url = "http://localhost:3001/category";

export const addCategory = async (newcategory) => {
  const response = await axios.post(`${url}`, newcategory);
  return response.data;
};

export const updateCategory = async (id, categoryData) => {
  const response = await axios.put(`${url}/:id`, categoryData);
  return response.data;
};

export const getCategory = async (id) => {
  const response = await axios.get(`${url}`, id);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${url}`);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(`${url}`, id);
  return response.data;
};
