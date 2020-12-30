import axios from "axios";

const api = axios.create({
  baseURL: `https://thetaapidev.herokuapp.com`,
});

export default api;