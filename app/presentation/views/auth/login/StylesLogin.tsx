import {StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const stylesLogin = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: AppColors.bg_input_dark
    },
    mainGradient:{
        flex: 1,
        opacity: 0.3,
        width: "100%",
        height: '100%',
    },
    mainInfoContainer:{
      width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
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
    },
    registerTextContainer:{
      position: "absolute",
      bottom: 60,
       alignSelf: "center",
    },
    registerText: {
        fontSize: 16,
        color: AppColors.white,
    },
    registerLink: {
        fontSize: 16,
        color: AppColors.white,
        fontWeight: "bold",
        textDecorationLine: "underline",
    }
})

export default stylesLogin;