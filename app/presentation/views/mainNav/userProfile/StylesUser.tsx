import {StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const stylesUserProfile = StyleSheet.create({
    mainContainter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.bg_input_dark,
    },
    bgImage: {
        zIndex: 1,
        position: "absolute",
        width: "80%",
        height: "100%",
        right: -250,
        top: 100,
    },
    contentContainer: {
        zIndex: 2,
        flex: 1,
        width: "85%",
    },
    textContainer: {
        flex: 1,
    },
    textLineOne: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 141,
    },
    textContainterLineTwo: {
        flexDirection: "row",
    },
    textLineTwo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 4,
    },
    buttonsContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 110,
    },
    button: {
        width: "100%",
    },
    deleteAccount: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 40,
        color: "white",
        textDecorationLine: "underline",
    },
});

export default stylesUserProfile;