import {ImageBackground, StyleSheet} from "react-native";
import Logo from "../../../../assets/icons/logo.svg"
import Logos from "../../../../assets/icons/logos.svg"
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {useEffect} from "react";

function SplashScreen({navigation}:PropsStackNavigation) {
    useEffect(() => {
        const timer = setTimeout(() =>{
            navigation.replace("WelcomeScreen")
        }, 5000)
        return () => {clearTimeout(timer)}
    }, []);
    return(
            <ImageBackground source={require("../../../../assets/backgrounds/bg_auth.png")}
                             style={stylesSplash.bgContainer}
                             resizeMode={"cover"}>
            <Logo style={stylesSplash.mainLogo}/>
            <Logos style={stylesSplash.otherLogos}/>
            </ImageBackground>
    )
}

const stylesSplash = StyleSheet.create({
    bgContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainLogo:{

    },
    otherLogos:{
        position: "absolute",
        bottom: 101,
    }
})

export default SplashScreen;