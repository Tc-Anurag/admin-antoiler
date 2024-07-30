// apiService.js
import axios from "axios";

const BASE_URL = "http://192.168.31.248:8000/api";

export const getData = async (endpoint: any) => {
  const response = await axios.get(`${BASE_URL}/${endpoint}`);
  return response;
};

export const postData = async (endpoint: any, data: any) => {
  const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
  return response;
};
