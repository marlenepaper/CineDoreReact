import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";

import LogoCinedore from "../../../../../assets/icons/logo_completo.svg";
import LogoMinisterio from "../../../../../assets/icons/logo-ministerioCultura.svg";
import LogoFilmoteca from "../../../../../assets/icons/logo-filmoteca.svg";
import IconoInfo from "../../../../../assets/icons/informacion.svg";

function HomeScreen({navigation}: PropsStackNavigation) {

    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={stylesRegister.mainGradient}
            />
            <View style={styles.contentContainer}>
                <View style={styles.logosContainer}>
                    <View style={styles.CinedoreMasInfo}>
                        <View style={styles.logoCineDoreContainer}>
                            <LogoCinedore style={styles.logoCineDore} width={150} height={40}/>
                        </View>
                        <View style={styles.info}>
                            <IconoInfo/>
                        </View>
                    </View>
                    <View style={styles.logosGobierno}>
                        <View style={styles.logoMinisterio}>
                            <LogoMinisterio/>
                        </View>
                        <View style={styles.logoFilmoteca}>
                            <LogoFilmoteca/>
                        </View>
                    </View>

                </View>


            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppColors.bg_input_dark,
        alignItems: "center",
    },
    contentContainer: {
        position: "absolute",
        width: "90%",
        height: "100%",
        paddingTop: 26,

    },

    logosContainer: {

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


});

export default HomeScreen;