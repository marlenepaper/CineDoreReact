
import { UserLocalRepository } from "../../domain/repositories/UserLocalRepository";
import { LocalStorage } from "../sources/local/LocalStorage";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";
import {UserRegisterRequestDTO} from "../../domain/entities/UserRegisterRequestDTO";
import {RegisterResponse} from "../../domain/entities/UserRegisterResponseDTO";

export class UserLocalRepositoryImpl implements UserLocalRepository {
    async save(user: RegisterResponse): Promise<void> {
        const { save } = LocalStorage();

        await save("cine_dore_usuario", JSON.stringify(user));
    }

    async getUser(): Promise<RegisterResponse> {
        const { getUser } = LocalStorage();
        const data = await getUser("cine_dore_usuario");
        return JSON.parse(data as any) as RegisterResponse;
    }

    async deleteUser(): Promise<void> {
        const { deleteUser } = LocalStorage();
        await deleteUser("cine_dore_usuario");
    }


    async updateUser(user: UserRegisterRequestDTO, user_id: number | undefined): Promise<UserRegisterRequestDTO> {
        try {
            const response = await ApiDelivery.post(`/usuarios/update/${user_id}`, user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}
