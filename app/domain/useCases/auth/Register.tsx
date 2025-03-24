import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserRegisterRequestDTO} from "../../entities/UserRegisterRequestDTO";

const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = async (user:UserRegisterRequestDTO) =>{
    return await register(user)
}