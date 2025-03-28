import {Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg"
import {AuthButton} from "../../../componentes/auth/AuthButton";
import {AuthFormInput} from "../../../componentes/auth/FormInput";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import stylesLogin from "./StylesLogin";
import {AppColors} from "../../../theme/AppTheme";
import {LinearGradient} from "expo-linear-gradient";
import LoginViewModel from "./ViewModel";
import {useEffect} from "react";
function LoginScreen({navigation}:PropsStackNavigation) {
    const {email, password, errorMessage, onChangeLogin, login, success} = LoginViewModel()
    useEffect(() =>{
        if (errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])

    const handleLogin = async () => {
        await login()
        if (success){
            ToastAndroid.show("Iniciado sesión con éxito", ToastAndroid.SHORT);
            navigation.replace("HomeScreen")
        }else {
            ToastAndroid.show("Error en el login", ToastAndroid.SHORT);
        }
    }

    return(
        <View style={stylesLogin.mainContainer}>
            <LinearGradient colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={stylesLogin.mainGradient}>
            </LinearGradient>
            <View style={stylesLogin.mainInfoContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
                    <BackArrow style={stylesLogin.backArrow}/>
                </TouchableOpacity>

                <View style={stylesLogin.loginTextContainer}>
                    <Text style={stylesLogin.loginText}>Inicia sesión</Text>
                </View>
                <View style={stylesLogin.formContainer}>
                    <View style={{marginBottom:7}}>
                        <AuthFormInput label={"Dirección de correo electrónico*"}
                                       keyboardType={"email-address"}
                                       secureTextEntry={false}
                                       onPressFromInterface={(text) => {onChangeLogin('email', text)}}/>

                        <AuthFormInput label={"Contraseña*"}
                                       keyboardType={"default"}
                                       secureTextEntry={true}
                                       onPressFromInterface={(text) => {onChangeLogin('password', text)}}/>
                    </View>


                    <AuthButton textButton={"Inicia sesión"} onPressFromInterface={() =>{handleLogin()}}/>
                </View>
                <View style={stylesLogin.registerTextContainer}>
                    <Text style={stylesLogin.registerText}>¿Aún no tienes cuenta? <Text
                        style={stylesLogin.registerLink} onPress={() => navigation.navigate("RegisterScreen")}>Crea tu cuenta</Text></Text>
                </View>
            </View>


        </View>

    )
}


export default LoginScreen;