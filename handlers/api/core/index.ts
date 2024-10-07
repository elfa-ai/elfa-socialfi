import axios from "axios";

import { getHeaders } from "./utils";
import { handleErrorResponse } from "./errors/utils";

const elfaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

axios.defaults.withCredentials = true;

elfaApi.interceptors.response.use(
  (response) => response,
  (error) => handleErrorResponse(error),
);

elfaApi.interceptors.request.use((config) => {
  const finalHeaders = getHeaders();
  config.headers["Authorization"] = finalHeaders["Authorization"];
  config.headers["Content-Type"] = finalHeaders["Content-Type"];

  return config;
});

export default elfaApi;
