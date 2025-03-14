import {StyleSheet} from "react-native";

const stylesPurchasedTicket = StyleSheet.create({
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
    mainGradientContainer:{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
    },
    infoContainer:{
        position: "absolute",
        width: "100%",
        bottom: "20%",
        display: "flex",
        alignSelf: "center",
    },
    btnContainer:{
        width:"85%",
        alignSelf: "center",
        position: "absolute",
        bottom: 85
    }
})

export default stylesPurchasedTicket;