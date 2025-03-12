import {ImageBackground, StyleSheet, Text, View} from "react-native";
import Line from "../../../../assets/icons/line.svg";
import Clock from "../../../../assets/icons/clock.svg";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import {MovieDataInterface} from "../../interfaces/MoviesInterface";

interface IMovieDataProps{
    movie: MovieDataInterface;
}
export const MovieData = ({movie}: IMovieDataProps) =>{
    return(
            <View style={stylesMovieData.movieDetails}>
                <View style={stylesMovieData.ageContainer}>
                    <ImageBackground source={require("../../../../assets/images/borde_degradado.png")}
                                     resizeMode={"stretch"}
                                     style={stylesMovieData.ageBackground}>
                        <Text style={stylesMovieData.ageText}>{movie.age}</Text>
                    </ImageBackground>
                </View>

                <View style={stylesMovieData.nameTypeContainer}>
                    <Text style={stylesMovieData.filmNameText}>{movie.name}</Text>
                    <View style={stylesMovieData.typeYearContainer}>
                        <Text style={{...stylesMovieData.filmTypeText, paddingRight: 12}}>{movie.category}</Text>
                        <Line style={{marginTop: 3}}/>
                        <Text style={{...stylesMovieData.filmTypeText, paddingLeft: 12}}>{movie.year}</Text>
                    </View>
                </View>

                <View style={stylesMovieData.durationVersionContainer}>
                    <Clock/>
                    <Text style={{...stylesMovieData.filmTypeText, paddingHorizontal:5}}>{movie.duration}</Text>
                    <Text style={stylesMovieData.versionText}>{movie.version}</Text>
                </View>
            </View>

    )
}

const stylesMovieData= StyleSheet.create({

    movieDetails:{
        display:"flex",
        flexDirection: "row",
        marginTop: 18
    },
    allDataContainer:{
        display: "flex",
        flexDirection: "column",
    },
    ageContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginEnd: 8
    },
    ageBackground:{
        justifyContent: "center",
        alignItems: "center",
        width: 31,
        height: 31,
    },
    ageText:{
        color: AppColors.white,
        fontSize: 16,
        fontFamily: AppFonts.bold,
    },
    filmNameText:{
        color: AppColors.white,
        fontSize: 20,
        fontFamily: AppFonts.bold,
    },
    filmTypeText:{
        color: AppColors.white,
        fontSize: 14,
        fontFamily: AppFonts.regular,
    },
    halfDataContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameTypeContainer:{
        display: "flex",
        flexDirection: "column",
    },
    typeYearContainer:{
        display: "flex",
        flexDirection: "row",
    },
    durationVersionContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    versionText:{
        color: AppColors.white,
        fontSize: 14,
        fontFamily: AppFonts.bold,
        borderWidth: 1,
        borderColor: AppColors.white,
    }
})