import {LoginRequestDTO} from "../entities/LoginRequestDTO";
import {UserRegisterRequestDTO} from "../entities/UserRegisterRequestDTO";
import {RegisterResponse} from "../entities/UserRegisterResponseDTO";

export interface UserLocalRepository{
    save(user: RegisterResponse) : Promise<void>,
    getUser(): Promise<RegisterResponse>,
    deleteUser(): Promise<void>
    updateUser(user: UserRegisterRequestDTO, user_id:number|undefined) : Promise<UserRegisterRequestDTO>,
}
