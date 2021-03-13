import axios from "axios";
import store from "../app/store";
let baseURL = null;

if (process.env.NODE_ENV === "development") {
  baseURL = process.env.REACT_APP_DEV_BASE_URL;
} else if (process.env.NODE_ENV === "production") {
  baseURL = process.env.REACT_APP_PROD_BASE_URL;
} else if (process.env.NODE_ENV === "test") {
  baseURL = process.env.REACT_APP_DEV_BASE_URL;
}

const apiConfig = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiConfig.interceptors.request.use(
  (request) => {
    console.log("TOKEN", localStorage.getItem("token"));
    request.headers.token = localStorage.getItem("token");
    return request;
  },
  null,
  { synchronous: true }
);

export default apiConfig;
