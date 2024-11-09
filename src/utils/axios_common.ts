import axios from "axios";


const axios_common = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_API
})
export default axios_common;