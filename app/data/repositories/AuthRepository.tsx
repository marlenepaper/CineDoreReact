import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { LoginRequestDTO } from "../../domain/entities/LoginRequestDTO";
import { RegisterRequestDTO } from "../../domain/entities/RegisterRequestDTO";
import { ApiDeliveryResponse } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: RegisterRequestDTO): Promise<ApiDeliveryResponse> {
        try {
            const response = await ApiDelivery.post("/auth/register", user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }

    async login(user: LoginRequestDTO): Promise<ApiDeliveryResponse> {
        try {
            const response = await ApiDelivery.post("/auth/login", user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }
}
