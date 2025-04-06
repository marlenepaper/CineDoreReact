import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import MovieBox from "../movies/MovieBox";
import { AppColors, AppFonts } from "../../theme/AppTheme";
import { PeliculaDTO } from "../../../domain/entities/PeliculaDTO";
import { FuncionDTO } from "../../../domain/entities/FuncionDTO";

interface Props {
    pelicula: PeliculaDTO;
    funcion: FuncionDTO;
    totalEntradas: number;
}

const Ticket = ({ pelicula, funcion, totalEntradas }: Props) => {
    const movie = {
        age: parseInt(pelicula.clasificacion),
        name: pelicula.nombre,
        duration: `${pelicula.duracion} min`,
        version: pelicula.lenguaje,
        date: funcion.fechaHora.split("T")[0],
        time: funcion.fechaHora.split("T")[1].slice(0, 5),
        room: funcion.sala,
    };

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={require("../../../../assets/images/ticket.png")}
                resizeMode={"contain"}
                style={styles.ticketContainer}
            >
                <View style={styles.qrContainer}>
                    <Image source={require("../../../../assets/images/qr.png")} />
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}>x{totalEntradas} entradas</Text>
                </View>

                <View style={styles.movieBoxContainer}>
                    <MovieBox movie={movie} color={AppColors.black} fontScale={0.97} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
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
