import {LoginRequestDTO} from "../entities/LoginRequestDTO";
import {UserRegisterRequestDTO} from "../entities/UserRegisterRequestDTO";

export interface UserLocalRepository{
    save(user: LoginRequestDTO) : Promise<void>,
    getUser(): Promise<LoginRequestDTO>,
    deleteUser(): Promise<void>
    updateUser(user: UserRegisterRequestDTO, user_id:number|undefined) : Promise<UserRegisterRequestDTO>,
}
