import axios from "axios";
const url = "http://localhost:3001/user";


export const addUser = async (newUser) => {
    const response = await axios.post(`${url}/register/`, newUser);    
    return response.data;
};

export const tryLogin = async (username, password) => {
    const response = await axios.post(`${url}/login/`,
        {
            username,
            password
        });
    return response.data;
};

export const refreshToken = async (token) => {
    const response = await axios.get(`${url}/refreshToken/`, token);
    return response.data;
};

export const updateUser = async (userData) => {
    const response = await axios.put(`${url}`, userData);
    return response.data;
};

export const getUserData = async (id) => {
    const response = await axios.get(`${url}`, id);
    return response.data;
}
