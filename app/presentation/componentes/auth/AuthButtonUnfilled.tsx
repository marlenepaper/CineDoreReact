import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface IAuthFormButtonUnfilledProps {
    textButton: string,
    onPressFromInterface: () => void
}

export const AuthButtonUnfilled = ({ textButton, onPressFromInterface }: IAuthFormButtonUnfilledProps) => {
    return (
        <View>
            <LinearGradient colors={[AppColors.secondary, AppColors.secondary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={stylesAuthButtonUnfilled.createAccountLinearGradient} >
                <TouchableOpacity style={stylesAuthButtonUnfilled.createAccountButtonContainer}
                                  onPress={() => onPressFromInterface()}>
                    <Text style={stylesAuthButtonUnfilled.createAccountText}>Crea tu cuenta</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const stylesAuthButtonUnfilled = StyleSheet.create({
    createAccountButtonContainer:{
        backgroundColor: AppColors.tertiary_dark, //cambiar
        borderRadius: 9,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    createAccountText:{
        color: AppColors.white,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppFonts.bold,
    },
    createAccountLinearGradient:{
        padding: 1,
        borderRadius: 10,
        marginTop: 16,
        height: 49,
    },
    }
)