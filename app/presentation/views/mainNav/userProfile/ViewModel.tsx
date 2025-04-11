import {DeleteUserBackUseCase} from "../../../../domain/useCases/auth/DeleteUserBack";

const UserProfileViewModel = () =>{
    const deleteUserProfile = async (token: string)=>{
        try{
            const response = await DeleteUserBackUseCase(token)
            if (response){
                return response
            }
        }catch (error){
            return JSON.stringify(error)
        }
    }

    return {
        deleteUserProfile,
    }
}

export default UserProfileViewModel