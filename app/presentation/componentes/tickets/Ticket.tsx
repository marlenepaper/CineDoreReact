import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import MovieBox from "../movies/MovieBox";
import { AppColors, AppFonts } from "../../theme/AppTheme";
import { PeliculaDTOInterface } from "../../interfaces/MoviesInterface"; // Interfaz para película

const Ticket = () => {
    const [movie, setMovie] = useState<PeliculaDTOInterface | null>(null); // Estado para almacenar la película
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para manejar la carga de datos
    const [error, setError] = useState<string | null>(null); // Para manejar errores

    const selectedFunctionId = 1; // Este sería el ID de la función seleccionada por el usuario, por ejemplo.

    useEffect(() => {
        // Realizamos la llamada al backend cuando el componente se monta
        const fetchMovieData = async () => {
            try {
                const response = await fetch('https://api.example.com/movie/1'); // Reemplaza con la URL real de la API
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const movieData: PeliculaDTOInterface = await response.json();
                setMovie(movieData);
            } catch (error: unknown) {
                // Verificación del tipo del error
                if (error instanceof Error) {
                    setError(error.message); // Acceder a error.message si es un objeto de tipo Error
                } else {
                    setError('Error desconocido');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovieData();
    }, []); // Se ejecuta solo cuando el componente se monta

    if (isLoading) {
        return (
            <View style={stylesTicket.mainContainer}>
                <Text style={stylesTicket.amountText}>Cargando...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={stylesTicket.mainContainer}>
                <Text style={stylesTicket.amountText}>Error: {error}</Text>
            </View>
        );
    }

    if (!movie) {
        return (
            <View style={stylesTicket.mainContainer}>
                <Text style={stylesTicket.amountText}>Película no encontrada</Text>
            </View>
        );
    }

    return (
        <View style={stylesTicket.mainContainer}>
            <ImageBackground
                source={require("../../../../assets/images/ticket.png")}
                resizeMode={"contain"}
                style={stylesTicket.ticketContainer}
            >
                <View style={stylesTicket.qrContainer}>
                    <Image source={require("../../../../assets/images/qr.png")} />
                </View>

                <View style={stylesTicket.amountContainer}>
                    <Text style={stylesTicket.amountText}>x3 entradas</Text>
                </View>

                <View style={stylesTicket.movieBoxContainer}>
                    <MovieBox
                        movie={movie} // Pasamos el objeto movie
                        color={AppColors.black}
                        fontScale={0.97}
                        selectedFunctionId={selectedFunctionId} // Pasamos el ID de la función seleccionada
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const stylesTicket = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    ticketContainer: {
        height: "100%",
        marginHorizontal: 15,
        flexDirection: "column",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    qrContainer: {
        paddingTop: 60,
    },
    amountContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: -20,
        marginBottom: 22,
    },
    amountText: {
        color: AppColors.black,
        fontSize: 23.2,
        fontFamily: AppFonts.bold,
    },
    movieBoxContainer: {
        paddingBottom: 50,
    },
});

export default Ticket;
