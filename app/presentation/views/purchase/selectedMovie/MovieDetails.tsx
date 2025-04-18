import React, { useEffect, useState } from "react";
import { ImageBackground, TouchableOpacity, View, Text, Pressable } from "react-native";
import { AppColors } from "../../../theme/AppTheme";
import { LinearGradient } from "expo-linear-gradient";
import BackArrow from "../../../../../assets/icons/chevron-left.svg";
import { MovieData } from "../../../componentes/movies/MovieData";
import { ScheduleData } from "../../../componentes/movies/ScheduleData";
import stylesMovieDetails from "./StyleMovieDetails";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../App";
import { GetPeliculaByIdUseCase } from "../../../../domain/useCases/peliculas/GetPeliculaByIdUseCase";
import { PeliculaDTO } from "../../../../domain/entities/PeliculaDTO";

// Tipado de navegación
type MovieDetailsRouteProp = RouteProp<RootStackParamList, "MovieDetailsScreen">;
type NavigationType = NativeStackNavigationProp<RootStackParamList, "MovieDetailsScreen">;

function MovieDetailsScreen() {
    const route = useRoute<MovieDetailsRouteProp>();
    const navigation = useNavigation<NavigationType>();
    const { id } = route.params;

    const [chosen, setChosen] = useState(true);
    const [movie, setMovie] = useState<PeliculaDTO | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPeliculaByIdUseCase(id);
            setMovie(data);
        };
        fetchData();
    }, [id]);

    if (!movie) {
        return <Text style={{ color: "white", textAlign: "center", marginTop: 100 }}>Cargando...</Text>;
    }

    return (
        <View style={stylesMovieDetails.mainContainer}>
            <ImageBackground
                source={
                    movie.imagenPoster
                        ? { uri: movie.imagenPoster }
                        : require("../../../../../assets/backgrounds/image_error.png")
                }
                style={stylesMovieDetails.image}
                resizeMode="cover"
            />

            <View style={stylesMovieDetails.backContainer}>
                <Pressable
                    style={stylesMovieDetails.backTouchable}
                    onPress={() => {
                        navigation.goBack();
                        console.log("presionado");
                    }}
                >
                    <BackArrow />
                    <Text style={stylesMovieDetails.backText}>Atrás</Text>
                </Pressable>
            </View>

            <LinearGradient
                colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.9 }}
                style={stylesMovieDetails.mainGradientContainer}
            />

            <View style={stylesMovieDetails.infoContainer}>
                <LinearGradient
                    colors={[AppColors.secondary, AppColors.secondary_dark]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={stylesMovieDetails.createAccountLinearGradient}
                >
                    <View style={stylesMovieDetails.tabContainer}>
                        {["Horarios", "Sinopsis"].map((tab, index) => {
                            const isActive = (chosen && index === 0) || (!chosen && index === 1);

                            return isActive ? (
                                <LinearGradient
                                    key={tab}
                                    colors={[AppColors.secondary, AppColors.secondary_dark]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={stylesMovieDetails.tabContainerChosen}
                                >
                                    <TouchableOpacity
                                        style={stylesMovieDetails.eachTab} // para centrar contenido dentro del gradiente
                                        onPress={() => setChosen(index === 0)}
                                    >
                                        <Text style={stylesMovieDetails.tabText}>{tab}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            ) : (
                                <TouchableOpacity
                                    key={tab}
                                    style={stylesMovieDetails.eachTab}
                                    onPress={() => setChosen(index === 0)}
                                >
                                    <Text style={stylesMovieDetails.tabText}>{tab}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                </LinearGradient>

                <View style={{ position: "relative", height: 200 }}>
                    <View style={stylesMovieDetails.movieDetailsAll}>
                        <MovieData
                            movie={{
                                age: parseInt(movie.clasificacion ?? "0"),
                                name: movie.nombre ?? "",
                                duration: `${movie.duracion ?? 0} min`,
                                year: movie.anio?.toString() ?? "",
                                category: movie.categoria ?? "",
                                version: movie.lenguaje ?? "",
                            }}
                        />
                        {chosen ? (
                            <View style={stylesMovieDetails.scheduleContainer}>
                                {movie.funciones?.map((funcion) => (
                                    <ScheduleData
                                        key={funcion.id}
                                        date={funcion.fechaHora.split("T")[0]}
                                        time={funcion.fechaHora.split("T")[1]?.slice(0, 5) ?? ""}
                                        onPressFromInterface={() => {
                                            if (funcion.id !== undefined && movie.id !== undefined) {
                                                navigation.navigate("TicketSelectionScreen", {
                                                    funcionId: funcion.id,
                                                    peliculaId: movie.id,
                                                });
                                            }
                                        }}
                                    />
                                ))}
                            </View>
                        ) : (
                            <>
                                <Text style={{ ...stylesMovieDetails.formatText, marginTop: 25 }}>Formato:</Text>
                                <View style={stylesMovieDetails.formatContainer}>
                                    <Text style={stylesMovieDetails.movieProjection}>{movie.formato ?? ""}</Text>
                                    <Text style={stylesMovieDetails.movieColor}>{movie.color ?? ""}</Text>
                                </View>
                                <Text style={{ ...stylesMovieDetails.formatText, marginTop: 18 }}>
                                    Información de la película
                                </Text>
                                <Text style={stylesMovieDetails.infoText}>{movie.sinopsis ?? ""}</Text>
                            </>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MovieDetailsScreen;
