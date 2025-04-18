import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../../theme/AppTheme";

const stylesMovieDetails = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height:'100%',
    },
    image:{
        flex: 1,
        width:"100%",
        height:"46%",
        justifyContent:"flex-end",
    },
    backContainer:{
        position: "absolute",
        top: 35,
        left: 21,
        zIndex: 999
    },
    backTouchable:{
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
    },
    backText:{
        fontFamily: AppFonts.regular,
        fontSize: 22,
        color: AppColors.white,
    },
    mainGradientContainer:{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
    },
    infoContainer:{
        position: "absolute",
        width: "90%",
        bottom: "30%",
        display: "flex",
        alignSelf: "center",
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
        textAlign: 'center',
        fontFamily: AppFonts.bold,
    },
    createAccountLinearGradient:{
        padding: 1,
        borderRadius: 10,
        marginTop: 16,
        height: 55,
    },
    tabContainer:{
        backgroundColor: AppColors.tertiary_dark,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
    },
    eachTab:{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    tabContainerChosen: {
        width: "48%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.secondary_dark,
        borderRadius: 10,
        margin:3
    },
    tabText:{
        fontSize: 20,
        paddingVertical: 10,
        color: AppColors.white,
        fontFamily: AppFonts.bold,
    },
    movieDetailsAll:{
        display: "flex",
        flexDirection: "column",
    },
    scheduleContainer:{
        display: "flex",
        flexDirection: "column",
        marginTop: 25
    },
    formatText:{
        color: AppColors.white,
        fontSize: 16,
        fontFamily: AppFonts.bold,
    },
    formatContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: AppColors.border_light,
        borderWidth: 1, // Separar los elementos a la izquierda y derecha
    },
    movieColor:{
        fontSize: 14.2,
        fontFamily: AppFonts.regular,
        color: AppColors.white,
        paddingVertical:6,
        borderLeftWidth:1,
        borderColor: AppColors.border_light,
        paddingHorizontal: 25
    },
    movieProjection:{
        fontSize: 14.2,
        fontFamily: AppFonts.regular,
        color: AppColors.white,
        paddingVertical:6,
        marginTop:0,
        paddingLeft: 3
    },
    infoText:{
        fontSize: 14.2,
        fontFamily: AppFonts.regular,
        color: AppColors.white,
        marginTop:8
    },

})

export default stylesMovieDetails