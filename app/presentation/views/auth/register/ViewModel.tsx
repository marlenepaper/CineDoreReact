import React from "react";
import {RegisterAuthUseCase} from "../../../../domain/useCases/auth/Register";
import {LoginAuthUseCase} from "../../../../domain/useCases/auth/Login";
import {saveUserUseCase} from "../../../../domain/useCases/userLocal/SaveUser";
import {UserRegisterRequestDTO} from "../../../../domain/entities/UserRegisterRequestDTO";
import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import {LoginRequestDTO} from "../../../../domain/entities/LoginRequestDTO";



const RegisterViewModel = () =>{
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        name:  "",
        phone: "",
        birthdate: "",
        email: "",
        identification: "",
    })
    const onChangeRegister = (property:string, value:any)=>{
        //... para que le de toda la info
        setValues({...values, [property]: value});
    }
    const register= async () =>{
        const dataSend: UserRegisterRequestDTO = {
            nombre: values.firstName,
            apellidos: values.lastName,
            correoElectronico: values.email,
            contrasenia: values.password,
            fechaNacimiento: values.birthdate,
            telefono: values.phone,
            identificacion: values.identification}
        if (validateForm()){
            const response = await RegisterAuthUseCase(dataSend);
            console.log("RESULT: " + JSON.stringify(response));
        }
    }
    const validateForm = () =>{
        if (values.firstName === ""){
            setErrorMessage("El nombre es obligatorio");
            return false;
        }
        if (values.lastName === ""){
            setErrorMessage("Los apellidos son obligatorios");
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

export default { RegisterViewModel}
