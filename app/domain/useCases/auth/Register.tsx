import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {RegisterRequestDTO} from "../../entities/RegisterRequestDTO";

const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = async (user:RegisterRequestDTO) =>{
    return await register(user)
}