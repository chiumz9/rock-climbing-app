import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://rock-climbing-api.herokuapp.com/api",
  //development: "http://localhost:3000/api",
};

//if (window.location.hostname === "localhost") {
//  apiUrl = apiUrls.development;
//} else {
  apiUrl = apiUrls.production;
//}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
