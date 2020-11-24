import axios from "axios";

const api = axios.create({
  baseURL: `https://thetaapi.herokuapp.com`,
});

export default api;