import axios from "axios";

const api = axios.create({
  baseURL: "https://doist-backend.herokuapp.com/api/"
});

export default api;
