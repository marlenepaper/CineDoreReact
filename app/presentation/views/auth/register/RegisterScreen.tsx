import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {AuthFormInput} from "../../../componentes/auth/FormInput";
import {AuthButton} from "../../../componentes/auth/AuthButton";
import stylesRegister from "./StylesRegister";

function RegisterScreen({navigation}:PropsStackNavigation) {
    return(
        <ScrollView style={stylesRegister.mainContainer}>
            <ImageBackground source={require("../../../../../assets/backgrounds/bg_auth_default.png")}
                             resizeMode={"cover"}
                             style={stylesRegister.imgBg}>
                <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
                    <BackArrow style={stylesRegister.backArrow}/>
                </TouchableOpacity>
                <View style={stylesRegister.createTextContainer}>
                    <Text style={stylesRegister.createAccountText}>Crea tu cuenta</Text>
                </View>
                <View style={stylesRegister.formContainer}>
                    <AuthFormInput label={"Dirección de correo electrónico*"}
                                   keyboardType={"email-address"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <AuthFormInput label={"Confirma el correo electrónico*"}
                                   keyboardType={"email-address"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <View>
                        <AuthFormInput label={"Contraseña*"}
                                       keyboardType={"default"}
                                       secureTextEntry={true}
                                       onPressFromInterface={() =>{}}>
                        </AuthFormInput>
                        <View style={stylesRegister.textPasswordContainer}>
                            <Text style={stylesRegister.textPassword}>Tu contraseña debe tener:</Text>
                            <Text style={stylesRegister.textPassword}>- Mínimo 10 caracteres</Text>
                        </View>

                    </View>


                    <AuthFormInput label={"Nombre*"}
                                   keyboardType={"default"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <AuthFormInput label={"Apellidos*"}
                                   keyboardType={"default"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <AuthFormInput label={"Fecha de nacimiento*"}
                                   keyboardType={"default"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <AuthFormInput label={"Teléfono"}
                                   keyboardType={"phone-pad"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <AuthFormInput label={"DNI/NIE/Pasaporte"}
                                   keyboardType={"default"}
                                   secureTextEntry={false}
                                   onPressFromInterface={() =>{}}/>
                    <View>
                        <Text style={stylesRegister.compulsoryText}>* Indica un campo obligatorio</Text>
                        <Text style={stylesRegister.rightsText}>Al seleccionar <Text style={stylesRegister.highlightText}>Crear Cuenta</Text> confirma que es mayor de edad,
                            que acepta las condiciones de uso
                            y que ha leído nuestra Política de privacidad.</Text>
                        <Text style={{...stylesRegister.rightsText, marginBottom: 56}}>Para retirar su consentimiento
                        (incluido cualquier consentimiento que haya otorgado previamente)
                         o para saber más sobre sus derechos,
                        consulte la
                            <Text style={stylesRegister.highlightText}> Polítiva de privacidad</Text>.
                        </Text>
                    </View>
                    <AuthButton textButton={"Crear cuenta"} onPressFromInterface={() => {}}/>
                    <View style={stylesRegister.loginTextContainer}>
                        <Text style={stylesRegister.rightsText}>¿Ya tienes cuenta? <Text
                            style={stylesRegister.highlightText}
                        onPress={() => navigation.navigate("LoginScreen")}>Inicia sesión</Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>

    )
}



export default RegisterScreen;