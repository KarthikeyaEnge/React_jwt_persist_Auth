import axios from "axios";

export const axiosrequest = axios.create({
  baseURL: "http://127.0.0.1:3500/",
});
