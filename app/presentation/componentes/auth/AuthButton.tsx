import {Pressable, StyleSheet, Text, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface IAuthFormButtonProps {
    textButton: string,
    onPressFromInterface: () => void
}

export const AuthButton = ({ textButton, onPressFromInterface }: IAuthFormButtonProps) => {
    return (
        <View>
        <Pressable onPress={() => onPressFromInterface()}>
            <LinearGradient colors={[AppColors.secondary, AppColors.secondary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styleAuthButton.formButton}>
                <Text style={styleAuthButton.formButtonText}>{textButton}</Text>
            </LinearGradient>

            </Pressable>
        </View>
    )
}

const styleAuthButton = StyleSheet.create({
    formButton:{
        borderRadius: 10,
        width: '100%',
        height: 46,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formButtonText:{
        color: AppColors.white,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppFonts.bold,
    }
})

