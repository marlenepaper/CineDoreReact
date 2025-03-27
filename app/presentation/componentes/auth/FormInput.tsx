import {KeyboardType, StyleSheet, Text, TextInput, View, Image, Pressable, Modal} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import DatePicker from "react-native-date-picker";

interface IFormInputProps{
    label: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    isDate?: boolean
    onPressFromInterface:(text:string) => void,
}

export const AuthFormInput =({label, keyboardType, secureTextEntry, isDate, onPressFromInterface}: IFormInputProps) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");

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
                               onChangeText={(text) => onPressFromInterface(text)}
                                editable={!isDate}/>
                    {isDate ?
                        <Pressable onPress={() => setOpen(true)}>
                            <Image source={require("../../../../assets/icons/calendar.png")} style={stylesAuthFormInput.eyeIcon}/>
                        </Pressable>
                    :null}
                    {secureTextEntry ?
                        <Pressable onPress={() => setPasswordVisible(!isPasswordVisible)}>
                            <Image source={isPasswordVisible?
                                require("../../../../assets/icons/eye.png")
                                :  require("../../../../assets/icons/eye_filled.png")}
                                   style={stylesAuthFormInput.eyeIcon}/>
                        </Pressable>
                    : null}

                </View>

        </LinearGradient>

            <DatePicker date={date}
                        open={open}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)}}
                        onCancel={() => setOpen(false)}
            />


        </View>
    )
}

const stylesAuthFormInput = StyleSheet.create({
    labelText:{
        color:AppColors.white,
        fontSize:16,
        marginBottom: 5,
        fontFamily: AppFonts.bold,
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
        width:24,
        height:24,
        marginRight: 16,
    }

})