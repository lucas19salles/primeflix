import axios from "axios";
// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=fd787c0b8ebdd0f9b46ed39cf156dce8&language=pt-BR
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
