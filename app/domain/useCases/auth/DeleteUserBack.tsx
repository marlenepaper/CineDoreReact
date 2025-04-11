import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";

const {deleteUser} = new AuthRepositoryImpl()

export const DeleteUserBackUseCase = async (token: string) => {
    return await deleteUser(token)
}