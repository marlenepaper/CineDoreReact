import { StyleSheet, Text, View } from "react-native";
import { useMemo } from "react";
import Clock from "../../../../assets/icons/clock.svg";
import { AppColors, AppFonts } from "../../theme/AppTheme";
import { PeliculaDTOInterface, FuncionDTO } from "../../interfaces/MoviesInterface";

interface IMovieBoxProps {
    movie: PeliculaDTOInterface;
    color: string;
    fontScale?: number;
    selectedFunctionId: number; // Propiedad para seleccionar la función por id
}

const MovieBox = ({ movie, color, fontScale = 1, selectedFunctionId }: IMovieBoxProps) => {
    // Buscar la función que tenga el mismo id que el proporcionado
    const selectedFunction = movie.funciones.find(funcion => funcion.id === selectedFunctionId);

    if (!selectedFunction) {
        return <Text>No hay función disponible con el ID proporcionado.</Text>; // Si no hay función, mostrar mensaje
    }

    // Formatear fecha solo cuando selectedFunction.fechaHora cambie
    const formattedDate = useMemo(() => {
        const newDate = new Date(selectedFunction.fechaHora);
        let dateStr = new Intl.DateTimeFormat("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
        }).format(newDate).replace(",", "");

        return dateStr.charAt(0).toUpperCase() + dateStr.slice(1).toLowerCase();
    }, [selectedFunction.fechaHora]);

    // Escalar tamaño de fuente
    const scaleFont = (size: number) => size * fontScale;

    // Estilos base reutilizables
    const baseText = {
        fontSize: scaleFont(16),
        color: color,
    };

    return (
        <View style={[styles.movieBoxContainer, { borderColor: color }]}>
            {/* Primera fila */}
            <View style={[styles.movieBoxRow1, { borderColor: color }]}>
                <View style={styles.movieNameContainer}>
                    <Text style={[styles.movieAge, { fontSize: scaleFont(16), borderColor: color, color }]}>
                        {movie.clasificacion}
                    </Text>
                    <Text style={[styles.movieName, { fontSize: scaleFont(20), color }]}>
                        {movie.nombre}
                    </Text>
                </View>

                <View style={styles.durationVersionContainer}>
                    <Clock fill={color} />
                    <Text style={[styles.filmTypeText, { fontSize: scaleFont(14), color }]}>
                        {movie.duracion} min
                    </Text>
                    <Text style={[styles.versionText, { fontSize: scaleFont(14), color, borderColor: color }]}>
                        {movie.formato}
                    </Text>
                </View>
            </View>

            {/* Segunda fila */}
            <View style={styles.movieBoxRow2}>
                <Text style={[baseText, styles.movieDateText, { paddingRight: 5 }]}>
                    {formattedDate}
                </Text>
                <Text style={[baseText, styles.movieTimeText, { borderColor: color }]}>
                    {selectedFunction.fechaHora.split(" ")[1]} {/* Mostrar solo la hora */}
                </Text>
                <Text style={[baseText, styles.movieDateText, { paddingHorizontal: 5 }]}>
                    Sala: <Text style={[styles.regularText, { fontSize: scaleFont(14), color }]}>{selectedFunction.sala}</Text>
                </Text>
            </View>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    movieBoxContainer: {
        borderWidth: 1,
        flexDirection: "column",
        marginHorizontal: 15,
    },
    movieBoxRow1: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        paddingVertical: 13,
        paddingHorizontal: 12,
        borderBottomWidth: 0.5,
    },
    movieBoxRow2: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        justifyContent: "space-between",
    },
    movieAge: {
        borderWidth: 1,
        fontFamily: AppFonts.bold,
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 3,
        marginEnd: 8,
    },
    movieNameContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    movieName: {
        fontFamily: AppFonts.bold,
    },
    durationVersionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    filmTypeText: {
        fontFamily: AppFonts.regular,
        paddingHorizontal: 5,
    },
    versionText: {
        fontFamily: AppFonts.bold,
        borderWidth: 1,
    },
    movieDateText: {
        fontFamily: AppFonts.bold,
    },
    regularText: {
        fontFamily: AppFonts.regular,
    },
    movieTimeText: {
        fontFamily: AppFonts.bold,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
});

export default MovieBox;