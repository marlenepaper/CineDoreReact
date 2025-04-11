import { PropsStackNavigation } from "../../../interfaces/StackNav";
import {Pressable, Text, ToastAndroid, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppColors } from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import BgImage from "../../../../../assets/images/imagen-fondo-flor.svg";
import { AuthButton } from "../../../componentes/auth/AuthButton";
import { useUserLocalStorage } from "../../../hooks/useUserLocalStorage";
import {useEffect, useState} from "react";
import stylesUserProfile from "./StylesUser";
import UserProfileViewModel from "./ViewModel";
import {StandardModal} from "../../../componentes/modals/StandardModal";

function UserProfileScreen({ navigation }: PropsStackNavigation) {
    const { user, getUserSession, deleteUserSession } = useUserLocalStorage();
    const {deleteUserProfile} = UserProfileViewModel()
    const [isModalVisible, setModalVisible] = useState(false);

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

    const handleRemoveAccount = async () =>{
        if (user && user.token){
            const response = await deleteUserProfile(user.token)
            if (response !== null ){
                await handleLogout();
                setTimeout(() => {
                    ToastAndroid.show(JSON.stringify(response), ToastAndroid.SHORT)
                }, 1000)
            }

        }
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    // Formato del nombre si existe
    const nombreFormateado = user?.nombre
        ? user.nombre.charAt(0).toUpperCase() + user.nombre.slice(1).toLowerCase()
        : "";

    const estaLogueado = !!user?.token;

    return (
        <View style={stylesUserProfile.mainContainter}>
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
            <BgImage style={stylesUserProfile.bgImage} />
            <View style={stylesUserProfile.contentContainer}>
                <View style={stylesUserProfile.textContainer}>
                    <Text style={stylesUserProfile.textLineOne}>¡Hola!</Text>
                    <View style={stylesUserProfile.textContainterLineTwo}>
                        <Text style={stylesUserProfile.textLineTwo}>Bienvenido</Text>
                        {estaLogueado && <Text style={stylesUserProfile.textLineTwo}>, {nombreFormateado}</Text>}
                    </View>
                </View>

                <View style={stylesUserProfile.buttonsContainer}>
                    <View style={stylesUserProfile.button}>
                        {estaLogueado ? (
                            <AuthButton textButton="Cerrar sesión" onPressFromInterface={handleLogout} />
                        ) : (
                            <AuthButton textButton="Iniciar sesión" onPressFromInterface={handleGoToLogin} />
                        )}
                    </View>

                    <Pressable
                        onPress={estaLogueado ? () => setModalVisible(true) : handleGoToRegister}
                    >
                        <Text style={stylesUserProfile.deleteAccount}>
                            {estaLogueado ? "Eliminar cuenta" : "Crear tu cuenta"}
                        </Text>
                    </Pressable>
                </View>
            </View>

            {isModalVisible && (
                <StandardModal
                    tile={"¿Confirmar la eliminación?"}
                    onClose={closeModal}
                    onSubmit={handleRemoveAccount}
                />
            )}
        </View>
    );
}


export default UserProfileScreen;
