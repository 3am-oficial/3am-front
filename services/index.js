// En tu archivo de configuración de Axios para el servidor
import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const AxiosServer = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});
