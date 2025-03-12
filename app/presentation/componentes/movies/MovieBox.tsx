import {StyleSheet, Text, View} from "react-native";
import Clock from "../../../../assets/icons/clock.svg";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import {MovieBoxInterface} from "../../interfaces/MoviesInterface";

interface IMovieBoxProps {
    movie: MovieBoxInterface
}

const MovieBox = ({movie}: IMovieBoxProps) =>{
    const newDate = new Date(movie.date);

    let formattedDate = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(newDate).replace(",", "");

    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase();

    return (
        <View style={stylesMovieBox.movieBoxContainer}>
            <View style={stylesMovieBox.movieBoxRow1}>
                <View style={stylesMovieBox.movieNameContainer}>
                    <Text style={stylesMovieBox.movieAge}>{movie.age}</Text>
                    <Text style={stylesMovieBox.movieName}>{movie.name}</Text>
                </View>

                <View style={stylesMovieBox.durationVersionContainer}>
                    <Clock/>
                    <Text style={stylesMovieBox.filmTypeText}>{movie.duration}</Text>
                    <Text style={stylesMovieBox.versionText}>{movie.version}</Text>
                </View>
            </View>
            <View style={stylesMovieBox.movieBoxRow2}>
                <Text style={stylesMovieBox.movieDateText}>{formattedDate}</Text>
                <Text style={stylesMovieBox.movieTimeText}>{movie.time}</Text>
                <Text style={{...stylesMovieBox.movieDateText, paddingRight:5}}>Sala:
                    <Text style={stylesMovieBox.regularText}>    {movie.room}</Text></Text>
            </View>
        </View>
    )
}

const stylesMovieBox = StyleSheet.create({
    movieBoxContainer:{
        borderWidth: 1,
        borderColor: AppColors.white,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 12,
    },
    movieBoxRow1:{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingVertical: 13,
        paddingHorizontal: 12,
        borderBottomWidth: 0.5,
        borderColor: AppColors.white,
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
        borderColor: AppColors.white,
        color: AppColors.white,
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
        color: AppColors.white,
        fontSize: 20,
        fontFamily: AppFonts.bold,
    },
    durationVersionContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    filmTypeText:{
        color: AppColors.white,
        fontSize: 14,
        fontFamily: AppFonts.regular,
        paddingHorizontal: 5
    },
    versionText:{
        color: AppColors.white,
        fontSize: 14,
        fontFamily: AppFonts.bold,
        borderWidth: 1,
        borderColor: AppColors.white,
    },
    movieDateText:{
        fontSize:16,
        color: AppColors.white,
        fontFamily: AppFonts.bold
    },
    regularText:{
        fontSize: 14,
        color: AppColors.white,
        fontFamily: AppFonts.regular,
    },
    movieTimeText:{
        fontSize:16,
        color: AppColors.white,
        fontFamily: AppFonts.bold,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: AppColors.white,
        paddingVertical: 15,
        paddingHorizontal: 15,
    }
})

export default MovieBox;