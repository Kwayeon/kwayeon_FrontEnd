import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const developmentHost = "http://localhost:4000";
const productionHost = "https://api.example.com";

const baseURL = process.env.NODE_ENV === "production" ? productionHost : developmentHost;

export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `%c${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
        "color: yellow"
      );
      console.log("Payload:", config.data);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      queryFn: async ({ queryKey }) => {
        const [url, params] = queryKey;

        if (typeof url !== "string") throw new Error("URL must be a string");

        const { data } = await instance.get(url, { params });
        return data;
      },
    },
  },
});