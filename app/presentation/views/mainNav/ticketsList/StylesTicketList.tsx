import {Dimensions, StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const { height, width } = Dimensions.get('window');
const stylesTicketList = StyleSheet.create({
    bgContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.bg_input_dark,
    },
    bgImgContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    bgImgBabyContainer: {
        position: "absolute",
    },
    content: {
        alignItems: "center",
        marginTop:20
    },
    welcomeText: {
        fontSize: 19,
        fontWeight: "bold",
        color: "white",
    },
    mainContainer: {
        flex: 1
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '70%',
        justifyContent: 'flex-end',
    },
    mainGradientContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
    },
    ticketWrapper: {
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default stylesTicketList