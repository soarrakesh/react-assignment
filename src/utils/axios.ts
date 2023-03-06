import axios, { AxiosResponse } from "axios";
import { ApiPaths } from "../constants";

const instance = axios.create({
  baseURL: ApiPaths.BASE_URL,
  timeout: 1000,
  withCredentials: true
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return {
      status: response.status,
      statusText: response.statusText,
      data: response.data.data,
      headers: response.headers,
      config: response.config
    };
  },
  (error) => {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    )
      return Promise.reject(error.response.data);

    return Promise.reject(error);
  }
);

const ApiService = {
  get: async (url: string = "") =>
    instance({
      method: "GET",
      url
    }),
  post: async (url: string, data = {}) =>
    instance({
      method: "POST",
      url,
      data
    }),
  put: async (url: string, data = {}) =>
    instance({
      method: "PUT",
      url,
      data
    }),
  patch: async (url: string) =>
    instance({
      method: "PATCH",
      url
    }),
  delete: async (url: string) =>
    instance({
      method: "DELETE",
      url
    })
};

export default ApiService;
