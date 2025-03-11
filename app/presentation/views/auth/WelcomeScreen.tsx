import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Logo from "../../../../assets/icons/logo.svg"
import {AuthButton} from "../../componentes/auth/AuthButton";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../theme/AppTheme";
import {PropsStackNavigation} from "../../interfaces/StackNav";

function WelcomeScreen({navigation}:PropsStackNavigation) {
    return(
        <View style={stylesWelcome.mainContainer}>
                <ImageBackground source={require("../../../../assets/images/bg_welcome.png")}
                style={stylesWelcome.image}
                resizeMode={"cover"}/>
            <LinearGradient colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={stylesWelcome.mainGradientContainer}/>

                <View style={stylesWelcome.infoContainer}>
                    <Logo style={stylesWelcome.logo}/>
                    <View style={stylesWelcome.welcomeTextContainer}>
                        <Text style={stylesWelcome.welcomeText}>
                            Bienvenidos al Cine Doré
                        </Text>
                    </View>
                    <View style={stylesWelcome.descTextContainer}>
                        <Text style={stylesWelcome.descText}>
                            Compra tus entradas y disfruta del mejor cine clásico y de autor en Madrid
                        </Text>
                    </View>
                    <View style={stylesWelcome.btnContainer}>
                        <AuthButton textButton={"Inicia sesión"}
                                    onPressFromInterface={() =>{navigation.navigate("LoginScreen")}}/>
                        <View>
                            <LinearGradient colors={[AppColors.secondary, AppColors.secondary_dark]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            style={stylesWelcome.createAccountLinearGradient} >
                                <TouchableOpacity style={stylesWelcome.createAccountButtonContainer}
                                                  onPress={() => {navigation.navigate("RegisterScreen")}}>
                                    <Text style={stylesWelcome.createAccountText}>Crea tu cuenta</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>


                    </View>
                    <View style={stylesWelcome.invitadoTextContainer}>
                        <Text style={stylesWelcome.invitadoText}>
                            Continuar como invitado
                        </Text>
                    </View>
                </View>
        </View>


        )
}

const stylesWelcome = StyleSheet.create({
    mainContainer:{
        flex: 1,
        width: '100%',
        height:'100%',
    },
    image:{
        flex: 1,
        width:"100%",
        height:"50%",
        justifyContent:"flex-end",
    },
    mainGradientContainer:{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
    },
    infoContainer:{
        position: "absolute",
        width: "100%",
        bottom: "7%",
        display: "flex",
        alignSelf: "center",
    },
    logo:{
        alignSelf: "center",
    },
    welcomeTextContainer:{
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    welcomeText:{
        fontSize: 32,
        color:"white",
        width:"60%",
        textAlign:"center",
        fontWeight:"bold",
    },
    descTextContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop: 16
    },
    descText:{
        fontSize: 18,
        color:"white",
        textAlign:"center",
        paddingHorizontal: 26
    },
    btnContainer:{
        marginTop: 61,
        width:"85%",
        justifyContent:"center",
        alignSelf:"center",
        marginHorizontal:36
    },
    createAccountLinearGradient:{
        padding: 2,
        borderRadius: 10,
        marginTop: 16,
        height: 46,
    },
    createAccountButtonContainer:{
        backgroundColor: AppColors.tertiary_dark, //cambiar
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    createAccountText:{
        color: AppColors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    invitadoTextContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    invitadoText:{
        fontSize: 14,
        textDecorationLine: "underline",
        color: AppColors.white,
        fontWeight: 'bold',
        marginTop: 69
    }
})

export default WelcomeScreen;