import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";

const {deleteUser} = new UserLocalRepositoryImpl();

export const deleteUserUseCase = async () =>{
    return await deleteUser();
}