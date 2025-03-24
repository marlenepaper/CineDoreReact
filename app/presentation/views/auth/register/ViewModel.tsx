import React from "react";
import {RegisterAuthUseCase} from "../../../../domain/useCases/auth/Register";
import {LoginAuthUseCase} from "../../../../domain/useCases/auth/Login";
import {saveUserUseCase} from "../../../../domain/useCases/userLocal/SaveUser";
import {UserRegisterRequestDTO} from "../../../../domain/entities/UserRegisterRequestDTO";
import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";

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
            const response = await LoginAuthUseCase(values);
            if(!response.success){
                setErrorMessage(response.message)
            }else{
                await saveUserUseCase(response.data as UserRegisterRequestDTO)
                //para almacenar el error y decirle que ha cambiado el estado
                await getUserSession()
            }
            console.log("RESULT: " + JSON.stringify(response));
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
        user
    }

}

const RegisterViewModel = () =>{
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        name:  "",
        phone: "",
        email: "",
    })
    const onChangeRegister = (property:string, value:any)=>{
        //... para que le de toda la info
        setValues({...values, [property]: value});
    }
    const register= async () =>{
        const dataSend = {
            firstName: values.name,
            lastName: "",
            email: values.email,
            password: values.password,
            repeatPassword: values.repeatPassword,
            phone: values.phone,
            image: ""}
        if (validateForm()){
            const response = await RegisterAuthUseCase(dataSend);
            console.log("RESULT: " + JSON.stringify(response));
        }
    }
    const validateForm = () =>{
        if (values.username === ""){
            setErrorMessage("El nombre es obligatorio");
            return false;
        }
        if (values.email === ""){
            setErrorMessage("El correo es obligatorio");
            return false;
        }
        if (values.password === ""){
            setErrorMessage("La contraseña es obligatoria");
            return false;
        }
        if (values.repeatPassword === ""){
            setErrorMessage("Repetir la contraseña es obligatorio");
            return false;
        }
        if (values.password != values.repeatPassword){
            setErrorMessage("Las contraseñas deben coincidir");
            return false;
        }
        return true;
    }
    return {
        ...values,
        onChangeRegister,
        register,
        errorMessage,
    }
}

export default {LoginViewModel, RegisterViewModel}
