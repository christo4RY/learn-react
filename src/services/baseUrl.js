import axios from "axios";
import { APP_URL } from "../lib/consant";

export const Fetch = axios.create({ baseURL: APP_URL });
