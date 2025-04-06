import { PropsStackNavigation } from "../../../interfaces/StackNav";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppColors } from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import BgImage from "../../../../../assets/images/imagen-fondo-flor.svg";
import { AuthButton } from "../../../componentes/auth/AuthButton";
import { useUserLocalStorage } from "../../../hooks/useUserLocalStorage";
import { useEffect } from "react";

function UserProfileScreen({ navigation }: PropsStackNavigation) {
    const { user, getUserSession, deleteUserSession } = useUserLocalStorage();

    useEffect(() => {
        getUserSession();
    }, []);

    const handleLogout = async () => {
        await deleteUserSession();
        navigation.replace("WelcomeScreen");
    };

    const handleGoToLogin = () => {
        navigation.replace("LoginScreen");
    };

    const handleGoToRegister = () => {
        navigation.replace("RegisterScreen");
    };

    // Formato del nombre si existe
    const nombreFormateado = user?.nombre
        ? user.nombre.charAt(0).toUpperCase() + user.nombre.slice(1).toLowerCase()
        : "";

    const estaLogueado = !!user?.token;

    return (
        <View style={styles.mainContainter}>
            <LinearGradient
                colors={[
                    AppColors.bg_input_dark,
                    AppColors.bg_input_dark,
                    AppColors.prueba_claro,
                    AppColors.prueba_claro,
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={stylesRegister.mainGradient}
            />
            <BgImage style={styles.bgImage} />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textLineOne}>¡Hola!</Text>
                    <View style={styles.textContainterLineTwo}>
                        <Text style={styles.textLineTwo}>Bienvenido</Text>
                        {estaLogueado && <Text style={styles.textLineTwo}>, {nombreFormateado}</Text>}
                    </View>
                </View>

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        {estaLogueado ? (
                            <AuthButton textButton="Cerrar sesión" onPressFromInterface={handleLogout} />
                        ) : (
                            <AuthButton textButton="Iniciar sesión" onPressFromInterface={handleGoToLogin} />
                        )}
                    </View>

                    <Pressable
                        onPress={estaLogueado ? () => console.log("Eliminar cuenta") : handleGoToRegister}
                    >
                        <Text style={styles.deleteAccount}>
                            {estaLogueado ? "Eliminar cuenta" : "Crear tu cuenta"}
                        </Text>
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

export default UserProfileScreen;
