import {ImageBackground, StyleSheet, Text, View} from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg"
import {AppColors} from "../../../theme/AppTheme";
import {AuthButton} from "../../../componentes/auth/AuthButton";
import {AuthFormInput} from "../../../componentes/auth/FormInput";
function LoginScreen() {
    return(
        <ImageBackground source={require("../../../../../assets/backgrounds/bg_auth_default.png")}
                         resizeMode={"cover"}
                         style={stylesLogin.mainContainer}>
        <BackArrow style={stylesLogin.backArrow}/>
            <View style={stylesLogin.loginTextContainer}>
                <Text style={stylesLogin.loginText}>Inicia sesión</Text>
            </View>
            <View style={stylesLogin.formContainer}>

                <AuthFormInput label={"Dirección de correo electrónico*"}
                               keyboardType={"email-address"}
                               secureTextEntry={false}
                               onPressFromInterface={() => {}}/>

                <AuthFormInput label={"Contraseña*"}
                               keyboardType={"email-address"}
                               secureTextEntry={true}
                               onPressFromInterface={() => {}}/>

                <AuthButton textButton={"Inicia sesión"} onPressFromInterface={() =>{}}/>
            </View>

        </ImageBackground>
    )
}

const stylesLogin = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    backArrow:{
        marginHorizontal: 33,
        marginTop: 44
    },
    loginTextContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        color: AppColors.white,
        fontSize: 28,
        fontWeight: "bold",
    },
    formContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        width:"85%",
        marginTop: 39
    }
})

export default LoginScreen;