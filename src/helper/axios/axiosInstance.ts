/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ResponseErrorType, ResponseSuccessType } from "@/types";
import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers.put["Content-Type"] = "application/json";
axiosInstance.defaults.headers.patch["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessType = {
      data: response?.data,
    };
    return responseObject;
  },
  function (error) {
    const responseObject: ResponseErrorType = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong!!!",
      errorMessages: error?.response?.data?.message,
    };
    return responseObject;
  }
);

export { axiosInstance };
