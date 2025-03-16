import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {LoginRequestDTO} from "../entities/LoginRequestDTO";
import {RegisterRequestDTO} from "../entities/RegisterRequestDTO";

//declarar la estructura que se va a utilizar
export interface AuthRepository {
    //tipo asincrona, una vez que se conecta, se ejecuta...
    register:(user : RegisterRequestDTO) => Promise<ApiDeliveryResponse>
    login:(user : LoginRequestDTO) => Promise<ApiDeliveryResponse>

}

