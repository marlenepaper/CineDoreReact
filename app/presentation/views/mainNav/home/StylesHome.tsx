import {StyleSheet} from "react-native";
import {AppColors} from "../../../theme/AppTheme";

const stylesHome = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppColors.bg_input_dark,
        alignItems: "center",
    },
    contentContainer: {
        width: "90%",
        height: "100%",
        paddingTop: 26,
    },
    logosContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    CinedoreMasInfo: {
        flexDirection: "row",
        gap: 8
    },
    logoCineDoreContainer: {},
    logoCineDore: {},
    info: {
        marginTop: 6
    },
    logosGobierno: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        transform: [{scale: 0.7}],
        marginLeft: 45,
    },
    logoMinisterio: {},
    logoFilmoteca: {},
    carousel:{
        justifyContent: "center",
        borderRadius: 25,
        marginTop: 30
    },
    moviesContainer:{
        flex: 1,
        width: "100%",
        marginTop:-200,
        alignItems: "center",
    }

});

export default stylesHome;