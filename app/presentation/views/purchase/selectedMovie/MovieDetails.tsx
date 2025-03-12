import {ImageBackground, TouchableOpacity, View, Text} from "react-native";
import {AppColors} from "../../../theme/AppTheme";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import BackArrow from "../../../../../assets/icons/chevron-left.svg";
import {MovieData} from "../../../componentes/movies/MovieData";
import {ScheduleData} from "../../../componentes/movies/ScheduleData";
import stylesMovieDetails from "./StyleMovieDetails";

function MovieDetailsScreen(){
    const [chosen, setChosen] = useState(true)

    return(
        <View style={stylesMovieDetails.mainContainer}>
            <ImageBackground source={require("../../../../../assets/images/img_pelicula.png")}
                             style={stylesMovieDetails.image}
                             resizeMode={"cover"}/>
            <View style={stylesMovieDetails.backContainer}>
                <TouchableOpacity style={stylesMovieDetails.backTouchable}>
                    <BackArrow/>
                    <Text style={stylesMovieDetails.backText}>Atrás</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient colors={["transparent", AppColors.tertiary_dark,  AppColors.tertiary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0.9 }}
                            style={stylesMovieDetails.mainGradientContainer}/>
            <View style={stylesMovieDetails.infoContainer}>
                <LinearGradient colors={[AppColors.secondary, AppColors.secondary_dark]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={stylesMovieDetails.createAccountLinearGradient} >
                    <View style={stylesMovieDetails.tabContainer}>
                        {chosen ? (
                            <LinearGradient
                                colors={[AppColors.secondary, AppColors.secondary_dark]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={stylesMovieDetails.tabContainerChosen}
                            >
                                <TouchableOpacity onPress={() => setChosen(!chosen)}>
                                    <Text style={stylesMovieDetails.tabText}>Horarios</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        ) : (
                            <TouchableOpacity style={stylesMovieDetails.eachTab} onPress={() => setChosen(!chosen)}>
                                <Text style={stylesMovieDetails.tabText}>Horarios</Text>
                            </TouchableOpacity>
                        )}
                        {!chosen ? (
                            <LinearGradient
                                colors={[AppColors.secondary, AppColors.secondary_dark]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={stylesMovieDetails.tabContainerChosen}
                            >
                                <TouchableOpacity onPress={() => setChosen(!chosen)}>
                                    <Text style={stylesMovieDetails.tabText}>Sinopsis</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        ) : (
                            <TouchableOpacity style={stylesMovieDetails.eachTab} onPress={() => setChosen(!chosen)}>
                                <Text style={stylesMovieDetails.tabText}>Sinopsis</Text>
                            </TouchableOpacity>
                        )}

                    </View>
                </LinearGradient>


                <View style={{ position: "relative", height: 200 }}>
                    <View style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: chosen ? 1 : 0 }}>
                        <View style={stylesMovieDetails.movieDetailsAll}>
                            <MovieData age={18} name={"La Dolce Vita"}
                                       category={"Drama"} year={"1960"}
                                       duration={"1h 14 m"} version={"VOSE"}/>
                            <View style={stylesMovieDetails.scheduleContainer}>
                                <ScheduleData date={"2025-01-15"} time={"17:00"} onPressFromInterface={() =>{}}/>
                                <ScheduleData date={"2025-01-16"} time={"18:00"} onPressFromInterface={() => {}}/>
                            </View>
                        </View>

                    </View>

                    <View style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: chosen ? 0 : 1}}>
                        <View style={stylesMovieDetails.movieDetailsAll}>
                            <MovieData age={18} name={"La Dolce Vita"}
                                       category={"Drama"} year={"1960"}
                                       duration={"1h 14 m"} version={"VOSE"}/>

                            <Text style={{...stylesMovieDetails.formatText, marginTop:25}}>Formato:</Text>
                            <View style={stylesMovieDetails.formatContainer}>
                                <Text style={stylesMovieDetails.movieProjection}>(DCP) Proyección en formato digital</Text>
                                <Text style={stylesMovieDetails.movieColor}>B/N</Text>
                            </View>
                            <Text style={{...stylesMovieDetails.formatText, marginTop:18}}>Información de la película</Text>
                            <Text style={stylesMovieDetails.infoText}>La historia sigue a Marcello Rubini (interpretado por Mastroianni),
                                un periodista de la prensa sensacionalista que cubre la vida de la alta sociedad romana.
                                Durante siete días y siete noches, Marcello se mueve entre fiestas, amoríos y momentos de introspección,
                                mientras busca un sentido más profundo a su vida en medio del vacío existencial y la decadencia moral de la Roma de la posguerra.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}


export default MovieDetailsScreen;