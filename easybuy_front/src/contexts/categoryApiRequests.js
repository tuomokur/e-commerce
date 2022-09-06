import axios from "axios";
const url = "http://localhost:3001/category";

export const addCategory = async (newcategory) => {
  const response = await axios.post(`${url}`, newcategory);
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
