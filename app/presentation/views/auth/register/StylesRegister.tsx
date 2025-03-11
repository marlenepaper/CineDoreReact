import {StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const stylesRegister = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    imgBg:{
        width: '100%',
        height: '100%',
    },
    backArrow:{
        marginHorizontal: 33,
        marginTop: 44
    },
    createTextContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    createAccountText: {
        color: AppColors.white,
        fontSize: 28,
        fontWeight: "bold",
    },
    formContainer:{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        width:"85%",
        marginTop: 39
    },
    textPasswordContainer:{
        marginBottom: 31,
        marginTop: -26
    },
    textPassword:{
        fontSize: 14,
        marginBottom: 5,
        paddingLeft: 5,
        color: AppColors.white,
    },
    compulsoryText:{
        fontSize: 13,
        marginBottom:32,
        color: AppColors.white,
    },
    rightsText:{
        fontSize: 15,
        marginBottom:31,
        color: AppColors.white,
    },
    highlightText:{
        fontSize: 15,
        color: AppColors.white,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    loginTextContainer:{
        justifyContent: "center",
        marginTop: 46,
        alignItems: "center",
        marginBottom: 100,
    }
})

export default stylesRegister;