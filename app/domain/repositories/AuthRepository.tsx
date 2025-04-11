import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {LoginRequestDTO} from "../entities/LoginRequestDTO";
import {UserRegisterRequestDTO} from "../entities/UserRegisterRequestDTO";
import {RegisterResponse} from "../entities/UserRegisterResponseDTO";

//declarar la estructura que se va a utilizar
export interface AuthRepository {
    //tipo asincrona, una vez que se conecta, se ejecuta...
    register:(user : UserRegisterRequestDTO) => Promise<ApiDeliveryResponse>
    login:(user : LoginRequestDTO) => Promise<RegisterResponse>
    deleteUser:(token: string) => Promise<String>

}

