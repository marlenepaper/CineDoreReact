import {LoginRequestDTO} from "../../domain/entities/LoginRequestDTO";
import React, {useEffect, useState} from "react";
import {getUserUseCase} from "../../domain/useCases/userLocal/GetUser";
import {deleteUserUseCase} from "../../domain/useCases/userLocal/DeleteUser";

export const useUserLocalStorage=() =>{
    const [user, setUser] = useState<LoginRequestDTO>();
    useEffect(()=>{
        getUserSession()
    }, []);

    const getUserSession = async () => {
        const user = await getUserUseCase();
        setUser(user);
    }

    const deleteUserSession= async() =>{
        const session = await deleteUserUseCase();
    }

    return {
        user,
        getUserSession,
        deleteUserSession,
    };
}