import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../../theme/AppTheme";

const stylesTicketSelection = StyleSheet.create({
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
        width: "100%",
        bottom: "3%",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
    },
    pricesContainer:{
      width: "85%",
      display: "flex",
      alignSelf: "center",
      flexDirection: "column",
      marginTop: 38
    },
    ticketGeneralContainer:{
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
    },
    ticketTextLeft: {
        width:"50%", // Ocupa el espacio restante para empujar el precio a la derecha
        fontFamily: AppFonts.medium,
        fontSize: 14.7,
        color: AppColors.white,
    },
    ticketText:{
      fontFamily: AppFonts.medium,
      fontSize: 14.7,
      color: AppColors.white,
    },
    addTicketContainer:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    ticketReducidoContainer:{
      display: "flex",
      flexDirection: "column",
      marginTop: 39
    },
    textTicketCasos:{
      fontFamily: AppFonts.regular,
      color: AppColors.white,
      fontSize: 12,
      opacity: 0.6
    },
    totalBtnContainer:{
        width: "80%",
        alignSelf: "center",
        marginTop: 39
    },
    totalContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    },
    totalText:{
        fontSize: 24,
        color: AppColors.white,
        fontFamily: AppFonts.medium,
    },
    ivaText:{
        fontSize: 14,
        color: AppColors.white,
        fontFamily: AppFonts.regular,
    }

})

export default stylesTicketSelection;