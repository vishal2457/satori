import axios from "axios";
import { APP_SETTINGS } from "../environment";

 const rmFetcher = axios.create({
  baseURL: APP_SETTINGS.REDMINE_SERVER,
  timeout: 1000,
  headers: { 
    "X-Redmine-API-Key": APP_SETTINGS.REDMINE_KEY,
    "Accept-Encoding": "gzip,deflate,compress"
},
});

export default rmFetcher;
