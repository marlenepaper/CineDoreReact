import React from "react";
import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import {LoginAuthUseCase} from "../../../../domain/useCases/auth/Login";
import {saveUserUseCase} from "../../../../domain/useCases/userLocal/SaveUser";
import {RegisterResponse} from "../../../../domain/entities/UserRegisterResponseDTO";

const LoginViewModel = () =>{
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
        email: "",
        password: "",
    });

    //se ejecuta cuando se inicia sesión, al principio no hay nada
    // pero después se guardan los datos tras iniciar otra sesión

    const {user, getUserSession} = useUserLocalStorage();

    const onChangeLogin = (property:string, value:any)=>{
        //... para que le de toda la info
        setValues({...values, [property]: value});
    }
    const login = async () => {
        if (validateForm()){
            const dataSend = {
                correoElectronico: values.email,
                contrasenia: values.password,
            }
            console.log(dataSend)
            const response = await LoginAuthUseCase(dataSend);
            await saveUserUseCase(response as RegisterResponse);
            //para almacenar el error y decirle que ha cambiado el estado
            console.log("RESULT: " + JSON.stringify(response));
            await getUserSession()
            return response

        }
    }
    const validateForm = () =>{
        if (values.email === ""){
            setErrorMessage("El correo es obligatorio");
            return false;
        }
        if (values.password === ""){
            setErrorMessage("La contraseña es obligatoria");
            return false;
        }
        return true;
    }
    return {
        ...values,
        onChangeLogin,
        login,
        errorMessage,
        user,
    }

}

export default LoginViewModel;