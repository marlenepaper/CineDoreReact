import axios from "axios";

const URL_CASA = "192.168.1.193"
const URL_MOBIL = ""
const ApiDelivery = axios.create({

    baseURL: "http://192.168.1.193:8080/api",
    headers:{
        "Content-Type": "application/json",
    }
})

export {ApiDelivery};