import {ImageBackground, StyleSheet, View} from "react-native";
import LogoCompleto from "../../../../../assets/icons/logo_completo.svg"
import Logos from "../../../../../assets/icons/logos.svg"
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {useEffect} from "react";
import {AppColors} from "../../../theme/AppTheme";
import stylesRegister from "../register/StylesRegister";
import {LinearGradient} from "expo-linear-gradient";
import ImageSplash from "../../../../../assets/images/imagen-splash.svg"
import {UserLocalRepositoryImpl} from "../../../../data/repositories/UserLocalRepository";
import {LocalStorage} from "../../../../data/sources/local/LocalStorage";
import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import SplashViewModel from "./ViewModel";

function SplashScreen({ navigation }: PropsStackNavigation) {
    const {user} = SplashViewModel()
    console.log(user)

    useEffect(() => {
       setTimeout(() => {
           if (user && user?.token) {
               navigation.replace("TabNavigator");
           } else {
               navigation.replace("WelcomeScreen");
           }}, 2500);
    }, [user?.token]);
    return(
        <View style={stylesSplash.bgContainer}>
            <LinearGradient colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={stylesRegister.mainGradient}>
            </LinearGradient>
            <ImageSplash style={stylesSplash.imgBg}/>
            <LogoCompleto style={stylesSplash.mainLogo}/>
            <Logos style={stylesSplash.otherLogos}/>
        </View>

    )
}

const stylesSplash = StyleSheet.create({
    mainGradient:{
        zIndex: 0,
        opacity: 0.1,
        ...StyleSheet.absoluteFillObject,
    },
    bgContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.bg_input_dark,
    },
    imgBg:{
      zIndex: 1,
      position: "absolute",
      width:"80%",
      height:"100%",
      right: -180,
    },
    mainLogo:{
        zIndex: 2
    },
    otherLogos:{
        position: "absolute",
        bottom: 101,
        zIndex: 2
    }
})

export default SplashScreen;