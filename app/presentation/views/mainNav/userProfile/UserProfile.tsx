import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import BgImage from "../../../../../assets/images/imagen-fondo-flor.svg";
import {AuthButton} from "../../../componentes/auth/AuthButton";


function UserProfileScreen({ navigation }: PropsStackNavigation) {

    const handleLogout = () => {
        // Lógica para cerrar sesión
        console.log("Cerrando sesión...");
    };

    const handleDeleteAccount = () => {
        // Lógica para eliminar cuenta
        console.log("Eliminando cuenta...");
    };

    return (
        <View style={styles.mainContainter}>
            <LinearGradient
                colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={stylesRegister.mainGradient}
            />
            <BgImage style={styles.bgImage} />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textLineOne}>¡Hola!</Text>
                    <View style={styles.textContainterLineTwo}>
                        <Text style={styles.textLineTwo}>Bienvenido, </Text>
                        <Text style={styles.textLineTwo}>Luis</Text>
                    </View>
                </View>

                <View style={styles.buttonsContainer}>

                    <View style={styles.button}>
                        <AuthButton textButton="Cerrar sesión" onPressFromInterface={handleLogout} />
                    </View>

                    <Pressable onPress={handleDeleteAccount}>
                        <Text style={styles.deleteAccount}>Eliminar cuenta</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        top:100
    },
    contentContainer: {
        zIndex: 2,
        flex: 1,
        width: "85%",
    },
    textContainer:{

        flex: 1,

    },
    textLineOne: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop:141,
    },
    textContainterLineTwo:{
        flexDirection: "row"
    },
    textLineTwo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    buttonsContainer:{
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
        marginBottom:110
    },
    button:{
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

export default UserProfileScreen;