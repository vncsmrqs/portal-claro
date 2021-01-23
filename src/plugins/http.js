import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_API;
const TIMEOUT = 10000;

export default (baseUrl, headers = {}, timeout, onSuccess, onError) => {
  const http = axios.create({
    baseURL: baseUrl || BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers
    },
    timeout: timeout || TIMEOUT
  });

  http.interceptors.response.use(
    onSuccess ? onSuccess : response => Promise.resolve(response.data),
    onError ? onError : error => Promise.reject(error)
  );

  return http;
};
