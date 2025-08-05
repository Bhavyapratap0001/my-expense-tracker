

// import axios from "axios";

const host = "https://my-expense-tracker-0mph.onrender.com";
// const host = "http://localhost:5005";
export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;



// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005';

// const api = axios.create({
//   baseURL: `${API_BASE_URL}/api`,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
