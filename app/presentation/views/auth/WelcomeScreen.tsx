import {ImageBackground, StyleSheet, Text, View} from "react-native";
import Logo from "../../../../assets/icons/logo.svg"
import {AuthButton} from "../../componentes/auth/AuthButton";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {AuthButtonUnfilled} from "../../componentes/auth/AuthButtonUnfilled";

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
                        <AuthButtonUnfilled textButton={"Crea tu cuenta"}
                                            onPressFromInterface={() => navigation.navigate("RegisterScreen")}/>


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
        bottom: "5%",
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
        fontFamily: AppFonts.bold
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
        paddingHorizontal: 26,
        fontFamily: AppFonts.regular
    },
    btnContainer:{
        marginTop: 61,
        width:"85%",
        justifyContent:"center",
        alignSelf:"center",
        marginHorizontal:36
    },
    createAccountLinearGradient:{
        padding: 1,
        borderRadius: 10,
        marginTop: 16,
        height: 49,
    },
    createAccountButtonContainer:{
        backgroundColor: AppColors.tertiary_dark, //cambiar
        borderRadius: 9,
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
        marginTop: 69,
        fontFamily: AppFonts.bold
    }
})

export default WelcomeScreen;