import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import MovieBox from "../movies/MovieBox";
import { AppColors, AppFonts } from "../../theme/AppTheme";
import { PeliculaDTO } from "../../../domain/entities/PeliculaDTO";
import { FuncionDTO } from "../../../domain/entities/FuncionDTO";
import QRCode from "react-native-qrcode-svg";

interface Props {
    pelicula: PeliculaDTO;
    funcion: FuncionDTO;
    totalEntradas: number;
    codigoQr: string
}

const Ticket = ({ pelicula, funcion, totalEntradas, codigoQr }: Props) => {
    const movie = {
        age: pelicula.clasificacion ?? "",
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
                    <QRCode value={codigoQr} size={225}/>
                </View>

                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}>x{totalEntradas} {totalEntradas === 1 ? 'entrada' : 'entradas'}</Text>
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
        marginBottom: 35,
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
