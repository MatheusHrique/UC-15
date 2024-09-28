import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 1000,
});
