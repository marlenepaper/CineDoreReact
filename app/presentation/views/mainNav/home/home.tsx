import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import ImageBgTwo from "../../../../../assets/images/flores.svg";

function TheatreInfoScreen({ navigation }: PropsStackNavigation) {

    return (
        <View style={styles.bgContainer}>
            <View>
                <LinearGradient
                    colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={stylesRegister.mainGradient}
                />
            </View>

            <ImageBgTwo style={styles.imgBg} />

            {/* Contenido */}
            <View style={styles.contentBox}>
                <Text style={styles.headerText}>El cine Doré es la sede de proyecciones de</Text>
                <Text style={styles.headerText}>Filmoteca Española.</Text>

                {/* Horario taquilla */}
                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.sectionTitle}>Horario taquilla</Text>
                        <Text style={styles.sectionSubtitle}>*Excepto festivos</Text>
                    </View>
                    <Text style={styles.normalText}>• Invierno: 17:00 a 20:00</Text>
                    <Text style={styles.normalText}>• Verano (julio y agosto): 17:30 - 20:30</Text>
                </View>

                {/* Horario proyecciones */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Horario proyecciones</Text>
                    <Text style={styles.normalText}>De martes a domingo</Text>
                </View>

                {/* Localización */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Localización</Text>
                    <Text style={styles.normalText}>Calle Santa Isabel, n.º 3 (28012 Madrid)</Text>
                </View>

                {/* Instalaciones */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Instalaciones</Text>
                    <Text style={styles.normalText}>• 2 Salas internas + 1 Sala de verano (exterior)</Text>
                    <Text style={styles.normalText}>• Cafetería</Text>
                    <Text style={styles.normalText}>• Librería</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        backgroundColor: AppColors.bg_input_dark,
        alignItems: "center",
    },
    mainGradient: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.1,
    },
    imgBg: {
        position: "absolute",
        width: "100%",
        height: "30%",
        top: 0,
    },
    contentBox: {
        marginTop: 120,
        width: "90%",
        backgroundColor: AppColors.bg_input_dark,
        padding: 20,
        borderRadius: 10,
    },
    section: {

        paddingBottom: 10,
        marginBottom: 10,
    },
    row: {
        flexDirection: "row", // 🔹 Pone los textos en la misma línea
        justifyContent: "space-between", // 🔹 Separa los textos
        alignItems: "center",
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.3)",
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
        marginTop: 5,
    },
});

export default TheatreInfoScreen;