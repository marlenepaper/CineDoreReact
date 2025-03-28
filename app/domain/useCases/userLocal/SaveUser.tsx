import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {LoginRequestDTO} from "../../entities/LoginRequestDTO";
import {RegisterResponse} from "../../entities/UserRegisterResponseDTO";

const {save} = new UserLocalRepositoryImpl();

export const saveUserUseCase = async (user: RegisterResponse) =>{
    await save(user)
}