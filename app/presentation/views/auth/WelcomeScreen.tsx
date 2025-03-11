import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import Logo from "../../../../assets/icons/logo.svg"
function WelcomeScreen() {
    return(
        <ImageBackground source={require("../../../../assets/backgrounds/background_default.png")}
        resizeMode={"cover"}
        style={stylesWelcome.bgContainer}>

            <View style={stylesWelcome.imageContainer}>
                <Image source={require("../../../../assets/images/bg_welcome.png")}
                       style={stylesWelcome.image}/>
                <Logo style={stylesWelcome.logo}/>
            </View>

            <View>
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


                <View>

                </View>
                <View>
                    <Text>
                        Continuar como invitado
                    </Text>
                </View>
            </View>
        </ImageBackground>
        )
}

const stylesWelcome = StyleSheet.create({
    bgContainer:{
        flex: 1,
    },
    imageContainer:{
        width:"100%",
        height:"45%",
        backgroundColor: "#000",
        alignItems: "center",
    },
    image:{
        width: "100%",
        height: "100%",
        opacity: 0.6
    },
    logo:{
        position:"absolute",
        bottom:0,
    },
    welcomeTextContainer:{
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      marginTop:16,
    },
    welcomeText:{
        fontSize: 32,
        color:"white",
        width:"60%",
        textAlign:"center"
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
    }
})

export default WelcomeScreen;