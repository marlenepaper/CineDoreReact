import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface IScheduleDataProps {
    date: string;
    time: string,
    onPressFromInterface:() => void
}

export const ScheduleData= ({date, time, onPressFromInterface}:IScheduleDataProps) => {

    const newDate = new Date(date);

    let formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(newDate).replace(",", "");

    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase();

    return(
        <TouchableOpacity style={stylesScheduleData.mainContainer}
                          onPress={() => onPressFromInterface}
                          activeOpacity={0.6}>
            <Text style={stylesScheduleData.movieDateText}>{formattedDate}</Text>
            <Text style={stylesScheduleData.movieTimeText}>{time}</Text>
        </TouchableOpacity>
    )

}

const stylesScheduleData = StyleSheet.create({
    mainContainer:{
        display: "flex",
        flexDirection: "column",
        marginBottom: 16,
        zIndex:1
    },
    movieDateText:{
        fontSize:16,
        color: AppColors.white,
        fontFamily: AppFonts.bold
    },
    movieTimeText:{
        fontSize:14,
        color: AppColors.white,
        fontFamily: AppFonts.regular
    }
})