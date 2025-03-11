import {KeyboardType, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import {AppColors} from "../../theme/AppTheme";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";

interface IFormInputProps{
    label: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    onPressFromInterface:(text:string) => void,
}

export const AuthFormInput =({label, keyboardType, secureTextEntry, onPressFromInterface}: IFormInputProps) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    return (
        <View>
            <Text style={stylesAuthFormInput.labelText}>{label}</Text>
            <LinearGradient colors={[AppColors.secondary, AppColors.secondary_dark]}
                                                         start={{ x: 0, y: 0 }}
                                                         end={{ x: 1, y: 1 }}
                                                         style={stylesAuthFormInput.borderGradient}>
                <View style={stylesAuthFormInput.inputContainer}>
                    <TextInput style={stylesAuthFormInput.textInput}
                               keyboardType={keyboardType}
                               secureTextEntry={secureTextEntry && !isPasswordVisible}
                               onChangeText={(text) => onPressFromInterface(text)}/>
                    {secureTextEntry ?
                        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
                            <Image source={isPasswordVisible?
                                require("../../../../assets/icons/eye.png")
                                :  require("../../../../assets/icons/eye.png")}
                                   style={stylesAuthFormInput.eyeIcon}/>
                        </TouchableOpacity>
                    : null}

                </View>

        </LinearGradient>

        </View>
    )
}

const stylesAuthFormInput = StyleSheet.create({
    labelText:{
        color:AppColors.white,
        fontSize:16,
        fontWeight:'bold',
        marginBottom: 5
    },
    borderGradient:{
        padding: 1,
        borderRadius: 10,
        marginBottom:31,
    },
    inputContainer:{
        backgroundColor: AppColors.bg_input_dark ,
        borderRadius: 9,
        alignItems: "center",
        color: AppColors.white,
        height: 53,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
    },
    textInput:{
        flex: 1,
        paddingLeft: 16,
        color: AppColors.white,
    },
    eyeIcon:{
        width:30,
        height:30,
        marginRight: 16,
    }

})