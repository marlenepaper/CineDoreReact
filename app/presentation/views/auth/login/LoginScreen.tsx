import {ImageBackground,Text, TouchableOpacity, View} from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg"
import {AuthButton} from "../../../componentes/auth/AuthButton";
import {AuthFormInput} from "../../../componentes/auth/FormInput";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import stylesLogin from "./StylesLogin";
function LoginScreen({navigation}:PropsStackNavigation) {
    return(
        <ImageBackground source={require("../../../../../assets/backgrounds/bg_auth_default.png")}
                         resizeMode={"cover"}
                         style={stylesLogin.mainContainer}>
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
                                   onPressFromInterface={() => {}}/>

                    <AuthFormInput label={"Contraseña*"}
                                   keyboardType={"default"}
                                   secureTextEntry={true}
                                   onPressFromInterface={() => {}}/>
                </View>


                <AuthButton textButton={"Inicia sesión"} onPressFromInterface={() =>{}}/>
            </View>
            <View style={stylesLogin.registerTextContainer}>
                <Text style={stylesLogin.registerText}>¿Aún no tienes cuenta? <Text
                    style={stylesLogin.registerLink} onPress={() => navigation.navigate("RegisterScreen")}>Crea tu cuenta</Text></Text>
            </View>

        </ImageBackground>
    )
}


export default LoginScreen;