import {Modal, View, Text, Pressable, ScrollView, StyleSheet} from "react-native";
import {useState} from "react";
import {AppFonts} from "../../theme/AppTheme";

interface iDatePickerProps{
    visible:boolean;
    onClose:() => void;
    onConfirm:(date:Date)=>void;
}

const CustomDatePicker = ({ visible, onClose, onConfirm }:iDatePickerProps) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const [day, setDay] = useState(currentDay);
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    // Modal visibility states
    const [modalVisible, setModalVisible] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState<string|null>(null);


    const closeModal = () => setModalVisible(false);
    const handleConfirm = () => {

        const selectedDate = new Date(`${year}-${month}-${day}`); // Formato "YYYY-MM-DD"

        onConfirm(selectedDate);

        setModalVisible(false);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.selectedDate}>
                Fecha de nacimiento
            </Text>

            <View style={styles.dateFields}>
                <Pressable onPress={() => { setFieldToEdit("day"); setModalVisible(true); }}>
                    <Text style={styles.dateText}>{day}</Text>
                </Pressable>
                <Pressable onPress={() => { setFieldToEdit("month"); setModalVisible(true); }}>
                    <Text style={styles.dateText}>{month}</Text>
                </Pressable>
                <Pressable onPress={() => { setFieldToEdit("year"); setModalVisible(true); }}>
                    <Text style={styles.dateText}>{year}</Text>
                </Pressable>
            </View>
            <Pressable style={styles.confirmContainer} onPress={handleConfirm}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>

            {modalVisible && (
                <Modal transparent visible={modalVisible} animationType="slide">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>


                            <ScrollView style={styles.scrollView}>
                                {fieldToEdit === "day" &&
                                    [...Array(31).keys()].map((d) => (
                                        <Pressable
                                            key={d}
                                            onPress={() => { setDay(d + 1); closeModal(); }}
                                            style={[styles.option, day === d + 1 && styles.selectedOption]}
                                        >
                                            <Text style={styles.optionText}>{d + 1}</Text>
                                        </Pressable>
                                    ))
                                }
                                {fieldToEdit === "month" &&
                                    [...Array(12).keys()].map((m) => (
                                        <Pressable
                                            key={m}
                                            onPress={() => { setMonth(m + 1); closeModal(); }}
                                            style={[styles.option, month === m + 1 && styles.selectedOption]}
                                        >
                                            <Text style={styles.optionText}>{m + 1}</Text>
                                        </Pressable>
                                    ))
                                }
                                {fieldToEdit === "year" &&
                                    [...Array(100).keys()].map((y) => (
                                        <Pressable
                                            key={y}
                                            onPress={() => { setYear(currentYear - y); closeModal(); }}
                                            style={[styles.option, (currentYear - y) === year && styles.selectedOption]}
                                        >
                                            <Text style={styles.optionText}>{currentYear - y}</Text>
                                        </Pressable>
                                    ))
                                }

                            </ScrollView>

                            <Pressable onPress={closeModal} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </Pressable>


                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedDate: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
        fontFamily: AppFonts.bold
    },
    dateFields: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
    },
    dateText: {
        fontSize: 20,
        fontFamily: AppFonts.medium
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        maxHeight: 400,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    scrollView: {
        maxHeight: 200,
    },
    option: {
        padding: 10,
        alignItems: "center",
    },
    selectedOption: {
        backgroundColor: "#ddd",
    },
    optionText: {
        fontSize: 20,
        fontFamily: AppFonts.medium
    },
    closeButton: {
        padding: 10,
        marginTop: 20,
        alignItems: "center",
    },
    closeButtonText: {
        fontSize: 18,
        color: "red",
    },
    confirmContainer:{
        display: "flex",
        flexDirection: "row",
        marginTop: 25,
        alignSelf: "flex-end"
    },
    confirmText:{
        textAlign: "right",
        color: "red",
        fontSize: 18,
    }
});
export default CustomDatePicker;