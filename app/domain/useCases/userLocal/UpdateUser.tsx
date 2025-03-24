import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserRegisterRequestDTO} from "../../entities/UserRegisterRequestDTO";

const {updateUser} = new UserLocalRepositoryImpl()

export const updateUserUseCase = async (user: UserRegisterRequestDTO, user_id: number|undefined): Promise<UserRegisterRequestDTO> => {
    return await updateUser(user, user_id);
}