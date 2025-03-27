import {
    KeyboardType,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Pressable,
    Modal,
    TouchableWithoutFeedback
} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import CustomDatePicker from "./DatePicker";

interface IFormInputProps{
    label: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    isDate?: boolean
    onPressFromInterface:(text:string) => void,
}

export const AuthFormInput =({label, keyboardType, secureTextEntry, isDate, onPressFromInterface}: IFormInputProps) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date|null>(null);
    const closeModal = () => {
        setOpen(false);
    };
    const handleDateConfirm = (date:Date) => {

        setSelectedDate(date);
        setOpen(false);
    };

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
                                editable={!isDate}
                               value={selectedDate ? selectedDate.toLocaleDateString("es-ES", { day: "2-digit", year: "numeric", month: "2-digit" }) : ""}/>
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
            {open && (
                <Modal
                    transparent={true}
                    visible={open}
                    animationType="slide"
                    onRequestClose={closeModal}
                >

                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={stylesAuthFormInput.modalBackground}>
                            <TouchableWithoutFeedback>
                                <View style={stylesAuthFormInput.modalContainer}>

                                    <CustomDatePicker visible={open} onClose={closeModal} onConfirm={(date) => {handleDateConfirm(date)}} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
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
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        width: 300,
        height: 200,
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

})