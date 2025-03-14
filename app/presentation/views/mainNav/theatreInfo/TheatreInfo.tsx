import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {AppColors, AppFonts} from "../../../theme/AppTheme";
import Logo from "../../../../../assets/icons/logo.svg";
import stylesRegister from "../../auth/register/StylesRegister";
import {LinearGradient} from "expo-linear-gradient";


function TheatreInfoScreen({navigation}: PropsStackNavigation) {

    return (
        <View style={stylesTheatreInfo.mainContainer}>
            <ImageBackground source={require("../../../../../assets/images/bg_cine_transparente.png")}
                             style={stylesTheatreInfo.bgImage}
                             resizeMode={"cover"}/>
            <LinearGradient
                colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={stylesRegister.mainGradient}
            />
            <View style={stylesTheatreInfo.contentContainer}>
                <View style={stylesTheatreInfo.headerContainer}>
                    <View style={stylesTheatreInfo.logoContainer}>
                        <Logo style={stylesTheatreInfo.logo}/>
                    </View>
                    <Text style={stylesTheatreInfo.headerText}>El cine Doré es la sede de proyecciones de</Text>
                    <Text style={stylesTheatreInfo.headerText}>Filmoteca Española.</Text>
                </View>

                {/* Horario taquilla */}
                <View style={stylesTheatreInfo.section}>
                    <View style={stylesTheatreInfo.row}>
                        <Text style={stylesTheatreInfo.sectionTitle}>Horario taquilla</Text>
                        <Text style={stylesTheatreInfo.sectionSubtitle}>*Excepto festivos</Text>
                    </View>
                    <Text style={stylesTheatreInfo.normalText}>• Invierno: 17:00 a 20:00</Text>
                    <Text style={stylesTheatreInfo.normalText}>• Verano (julio y agosto): 17:30 - 20:30</Text>
                </View>

                {/* Horario proyecciones */}
                <View style={stylesTheatreInfo.section}>
                    <View style={stylesTheatreInfo.row}>
                    <Text style={stylesTheatreInfo.sectionTitle}>Horario proyecciones</Text>
                    </View>
                    <Text style={stylesTheatreInfo.normalText}>De martes a domingo</Text>
                </View>

                {/* Localización */}
                <View style={stylesTheatreInfo.section}>
                    <View style={stylesTheatreInfo.row}>
                    <Text style={stylesTheatreInfo.sectionTitle}>Localización</Text>
                    </View>
                    <Text style={stylesTheatreInfo.normalText}>Calle Santa Isabel, n.º 3 (28012 Madrid)</Text>
                </View>

                {/* Instalaciones */}
                <View style={stylesTheatreInfo.section}>
                    <View style={stylesTheatreInfo.row}>
                    <Text style={stylesTheatreInfo.sectionTitle}>Instalaciones</Text>
                    </View>
                    <Text style={stylesTheatreInfo.normalText}>• 2 Salas internas + 1 Sala de verano (exterior)</Text>
                    <Text style={stylesTheatreInfo.normalText}>• Cafetería</Text>
                    <Text style={stylesTheatreInfo.normalText}>• Librería</Text>
                </View>
            </View>
        </View>
    )
}

const stylesTheatreInfo = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: AppColors.bg_input_dark,
        alignItems: "center",
    },
    bgImage: {
        width: "100%",
        aspectRatio: 12 / 16,
        resizeMode: "contain"
    },
    contentContainer:{
        position: "absolute",
        width: "85%",
        height: "100%",
        paddingTop: 100,
    },
    logoContainer: {
        alignItems: "center",
    },
    logo:{
        transform: [{ scale: 0.7 }],
    },
    headerContainer:{
        marginBottom: 46,
    },
    headerText:{
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    section: {
        marginBottom: 42,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginBottom:4
    },
    sectionSubtitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
        textAlign: "right",
    },
    normalText: {
        fontSize: 14,
        color: "white",
        marginTop: 12,
    },


})

export default TheatreInfoScreen;