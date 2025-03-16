import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {RegisterRequestDTO} from "../../entities/RegisterRequestDTO";

const {updateUser} = new UserLocalRepositoryImpl()

export const updateUserUseCase = async (user: RegisterRequestDTO, user_id: number|undefined): Promise<RegisterRequestDTO> => {
    return await updateUser(user, user_id);
}