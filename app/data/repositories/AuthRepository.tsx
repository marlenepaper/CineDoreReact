import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { LoginRequestDTO } from "../../domain/entities/LoginRequestDTO";
import { UserRegisterRequestDTO } from "../../domain/entities/UserRegisterRequestDTO";
import { ApiDeliveryResponse } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";
import {RegisterResponse} from "../../domain/entities/UserRegisterResponseDTO";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: UserRegisterRequestDTO): Promise<ApiDeliveryResponse> {
        try {
            const response = await ApiDelivery.post("/usuarios/register", user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }

    async login(user: LoginRequestDTO): Promise<RegisterResponse> {
        try {
            const response = await ApiDelivery.post("/usuarios/login", user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as RegisterResponse);
        }
    }
}
