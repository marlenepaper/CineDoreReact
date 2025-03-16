import {LoginRequestDTO} from "../entities/LoginRequestDTO";
import {RegisterRequestDTO} from "../entities/RegisterRequestDTO";

export interface UserLocalRepository{
    save(user: LoginRequestDTO) : Promise<void>,
    getUser(): Promise<LoginRequestDTO>,
    deleteUser(): Promise<void>
    updateUser(user: RegisterRequestDTO, user_id:number|undefined) : Promise<RegisterRequestDTO>,
}
