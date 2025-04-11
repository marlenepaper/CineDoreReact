import {Modal, TouchableWithoutFeedback, View, Text, Keyboard, StyleSheet, Pressable} from "react-native"
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface IModalProps{
    tile: string,
    onClose:() => void,
    onSubmit:() =>void
}

export const StandardModal = ({tile, onSubmit, onClose}:IModalProps) => {

    const handleSubmit = () =>{
        onSubmit()
        onClose()
    }

    return (
        <Modal
            transparent
            animationType="fade">
            <TouchableWithoutFeedback onPress={() => {
                onClose();
                Keyboard.dismiss();
            }}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalTextContainer}>
                            <Text style={styles.title}>{tile}</Text>
                            <View style={styles.responseContainer}>
                                <Pressable onPress={onClose}>
                                    <Text style={styles.responseText}>No</Text>
                                </Pressable>
                                <Pressable onPress={handleSubmit}>
                                    <Text style={{...styles.responseText, color: "red"}}>Sí</Text>
                                </Pressable>
                            </View>
                        </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 25,
        width: "95%",
    },
    modalTextContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    title:{
        fontSize: 18,
        fontFamily: AppFonts.bold,
        color: AppColors.black,
        textAlign: "center",
    },
    responseContainer:{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    responseText:{
        fontSize: 18,
        fontFamily: AppFonts.medium,
    }
})