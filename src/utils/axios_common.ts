import axios from "axios";

const axios_common = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true,
    withXSRFToken: true
});

export default axios_common;