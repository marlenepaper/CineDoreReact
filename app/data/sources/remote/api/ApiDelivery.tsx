import axios from "axios";

const URL_CASA = "192.168.1.193"
const URL_MOBIL = ""
const ApiDelivery = axios.create({
    //cómo vamos a enviar y recibir los datos

    baseURL: "http://192.168.1.193:8080/api",
    headers:{
        "Content-Type": "application/json",
    }
})

export {ApiDelivery};