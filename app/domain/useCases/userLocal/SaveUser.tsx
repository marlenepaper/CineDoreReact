import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {LoginRequestDTO} from "../../entities/LoginRequestDTO";

const {save} = new UserLocalRepositoryImpl();

export const saveUserUseCase = async (user: LoginRequestDTO) =>{
    await save(user)
}