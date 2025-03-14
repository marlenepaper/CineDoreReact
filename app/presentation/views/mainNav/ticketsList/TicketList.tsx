import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import ImageBg from "../../../../../assets/images/asientos.svg";
import ImageBgTwo from "../../../../../assets/images/flores.svg";


function TicketListScreen({navigation}: PropsStackNavigation) {

    return (
        <View style={styles.bgContainer}>
            <LinearGradient
                colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={stylesRegister.mainGradient}
            />

            <View style={styles.bgImgContainer}>
                <ImageBgTwo/>
                <View style={styles.bgImgBabyContainer}>
                    <ImageBg/>
                    <View style={styles.content}>
                        <Text style={styles.welcomeText}>Aún no cuentas con</Text>
                        <Text style={styles.welcomeText}>alguna entrada activa</Text>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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

    }
});

export default TicketListScreen;