import { UserProfileDTO} from "../../domain/entities/UserProfileDTO";
import { LoginRequestDTO } from "../../domain/entities/LoginRequestDTO";
import { UserLocalRepository } from "../../domain/repositories/UserLocalRepository";
import { LocalStorage } from "../sources/local/LocalStorage";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";
import {RegisterRequestDTO} from "../../domain/entities/RegisterRequestDTO";

export class UserLocalRepositoryImpl implements UserLocalRepository {
    // Guardar usuario
    async save(user: LoginRequestDTO): Promise<void> {
        const { save } = LocalStorage();
        // Guardar el usuario en el almacenamiento local
        await save("cine_dore_usuario", JSON.stringify(user));
    }

    // Obtener usuario
    async getUser(): Promise<LoginRequestDTO> {
        const { getUser } = LocalStorage();
        const data = await getUser("cine_dore_usuario");
        // Parsear los datos del usuario del almacenamiento local
        return JSON.parse(data as any) as LoginRequestDTO;
    }

    // Eliminar usuario
    async deleteUser(): Promise<void> {
        const { deleteUser } = LocalStorage();
        await deleteUser("cine_dore_usuario");
    }

    // Actualizar datos de usuario
    async updateUser(user: RegisterRequestDTO, user_id: number | undefined): Promise<RegisterRequestDTO> {
        try {
            const response = await ApiDelivery.post(`/users/update/${user_id}`, user);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}
