import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {LoginRequestDTO} from "../../entities/LoginRequestDTO";

const {login} = new AuthRepositoryImpl()

export const LoginAuthUseCase = async (user:LoginRequestDTO) =>{
    return await login(user)
}