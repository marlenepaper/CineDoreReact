import {StyleSheet, Text, View} from "react-native";
import Clock from "../../../../assets/icons/clock.svg";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import {MovieBoxInterface} from "../../interfaces/MoviesInterface";

interface IMovieBoxProps {
    movie: MovieBoxInterface,
    color: string,
    fontScale?: number
}

const MovieBox = ({movie, color, fontScale = 1}: IMovieBoxProps) =>{
    const newDate = new Date(movie.date);

    let formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(newDate).replace(",", "");

    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase();
    const scaleFont = (size: number) => size * fontScale;

    return (
        <View style={{ ...stylesMovieBox.movieBoxContainer, borderColor: color }}>
            <View style={{ ...stylesMovieBox.movieBoxRow1, borderColor: color }}>
                <View style={stylesMovieBox.movieNameContainer}>
                    <Text style={{ ...stylesMovieBox.movieAge, fontSize: scaleFont(16), borderColor: color, color: color }}>
                        {movie.age}
                    </Text>
                    <Text style={{ ...stylesMovieBox.movieName, fontSize: scaleFont(20), color: color }}>
                        {movie.name}
                    </Text>
                </View>

                <View style={stylesMovieBox.durationVersionContainer}>
                    <Clock />
                    <Text style={{ ...stylesMovieBox.filmTypeText, fontSize: scaleFont(14), color: color }}>
                        {movie.duration}
                    </Text>
                    <Text style={{ ...stylesMovieBox.versionText, fontSize: scaleFont(14), color: color, borderColor: color }}>
                        {movie.version}
                    </Text>
                </View>
            </View>
            <View style={stylesMovieBox.movieBoxRow2}>
                <Text style={{ ...stylesMovieBox.movieDateText, fontSize: scaleFont(16), color: color, paddingRight: 5 }}>
                    {formattedDate}
                </Text>
                <Text style={{ ...stylesMovieBox.movieTimeText, fontSize: scaleFont(16), color: color, borderColor: color }}>
                    {movie.time}
                </Text>
                <Text style={{ ...stylesMovieBox.movieDateText, fontSize: scaleFont(16), paddingRight: 5, paddingLeft: 5 }}>
                    Sala: <Text style={{ ...stylesMovieBox.regularText, fontSize: scaleFont(14), color: color }}> {movie.room}</Text>
                </Text>
            </View>
        </View>
    )
}

const stylesMovieBox = StyleSheet.create({
    movieBoxContainer:{
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 15,
    },
    movieBoxRow1:{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingVertical: 13,
        paddingHorizontal: 12,
        borderBottomWidth: 0.5,
    },
    movieBoxRow2:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        justifyContent: "space-between",
    },
    movieAge:{
        borderWidth: 1,
        fontSize: 16,
        fontFamily: AppFonts.bold,
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 3,
        marginEnd: 8
    },
    movieNameContainer:{
        display:"flex",
        flexDirection: "row",
        alignItems:'center',
    },
    movieName:{
        fontSize: 20,
        fontFamily: AppFonts.bold,
    },
    durationVersionContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    filmTypeText:{
        fontSize: 14,
        fontFamily: AppFonts.regular,
        paddingHorizontal: 5
    },
    versionText:{
        fontSize: 14,
        fontFamily: AppFonts.bold,
        borderWidth: 1,
    },
    movieDateText:{
        fontSize:16,
        fontFamily: AppFonts.bold
    },
    regularText:{
        fontSize: 14,
        fontFamily: AppFonts.regular,
    },
    movieTimeText:{
        fontSize:16,
        fontFamily: AppFonts.bold,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        paddingVertical: 15,
        paddingHorizontal: 15,
    }
})

export default MovieBox;