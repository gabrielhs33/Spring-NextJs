import Axios, { AxiosInstance } from "axios";

export const httpCLient: AxiosInstance = Axios.create({

    baseURL:"http://localHost:8080"
})