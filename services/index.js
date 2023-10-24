// En tu archivo de configuración de Axios para el servidor
import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: "https://us-central1-am-oficial.cloudfunctions.net",
});

export const AxiosServer = axios.create({
  baseURL: "https://us-central1-am-oficial.cloudfunctions.net",
  headers: {
    "Content-Type": "application/json",
  },
});
