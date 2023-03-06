import axios from "axios";
import { baseURL } from "../utility/Config";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
