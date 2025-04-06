import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg";
import { LinearGradient } from "expo-linear-gradient";
import { AppColors } from "../../../theme/AppTheme";
import { AuthButton } from "../../../componentes/auth/AuthButton";
import { AuthButtonUnfilled } from "../../../componentes/auth/AuthButtonUnfilled";
import styles from "./StylesTicketSelection";
import MovieBox from "../../../componentes/movies/MovieBox";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../../App";
import { GetPeliculaByIdUseCase } from "../../../../domain/useCases/peliculas/GetPeliculaByIdUseCase";
import { PeliculaDTO } from "../../../../domain/entities/PeliculaDTO";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TicketSelectionRouteProp = RouteProp<RootStackParamList, "TicketSelectionScreen">;
type NavigationType = NativeStackNavigationProp<RootStackParamList, "TicketSelectionScreen">;

function TicketSelectionScreen() {
    const route = useRoute<TicketSelectionRouteProp>();
    const navigation = useNavigation<NavigationType>();
    const { funcionId, peliculaId } = route.params;

    const [pelicula, setPelicula] = useState<PeliculaDTO | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPeliculaByIdUseCase(peliculaId);
            setPelicula(data);
        };
        fetchData();
    }, [peliculaId]);

    const funcion = pelicula?.funciones.find((f) => f.id === funcionId);

    const movie = funcion && pelicula
        ? {
            age: parseInt(pelicula.clasificacion),
            name: pelicula.nombre,
            duration: `${pelicula.duracion} min`,
            version: pelicula.lenguaje,
            date: funcion.fechaHora.split("T")[0],
            time: funcion.fechaHora.split("T")[1].slice(0, 5),
            room: funcion.sala,
        }
        : null;

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={require("../../../../../assets/images/img_pelicula.png")}
                style={styles.image}
                resizeMode={"cover"}
            />
            <View style={styles.backContainer}>
                <TouchableOpacity style={styles.backTouchable} onPress={() => navigation.goBack()}>
                    <BackArrow />
                    <Text style={styles.backText}>Atrás</Text>
                </TouchableOpacity>
            </View>

            <LinearGradient
                colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.9 }}
                style={styles.mainGradientContainer}
            />

            <View style={styles.infoContainer}>
                {movie && <MovieBox movie={movie} color={AppColors.white} />}

                {/* Entradas */}
                <View style={styles.pricesContainer}>
                    <View style={styles.ticketGeneralContainer}>
                        <Text style={styles.ticketTextLeft}>Entrada general</Text>
                        <Text style={styles.ticketText}>3 €</Text>
                        <View style={styles.addTicketContainer}>
                            <Text style={styles.ticketText}>-</Text>
                            <Text style={{ ...styles.ticketText, paddingHorizontal: 18 }}>0</Text>
                            <Text style={styles.ticketText}>+</Text>
                        </View>
                    </View>

                    <View style={styles.ticketReducidoContainer}>
                        <View style={styles.ticketGeneralContainer}>
                            <Text style={styles.ticketTextLeft}>Entrada reducida</Text>
                            <Text style={styles.ticketText}>2 €</Text>
                            <View style={styles.addTicketContainer}>
                                <Text style={styles.ticketText}>-</Text>
                                <Text style={{ ...styles.ticketText, paddingHorizontal: 18 }}>0</Text>
                                <Text style={styles.ticketText}>+</Text>
                            </View>
                        </View>
                        <Text style={styles.textTicketCasos}>Estudiantes</Text>
                        <Text style={styles.textTicketCasos}>Familias numerosas</Text>
                        <Text style={styles.textTicketCasos}>Grupos vinculados a instituciones culturales o educativas</Text>
                        <Text style={styles.textTicketCasos}>Mayores de 65 años</Text>
                        <Text style={styles.textTicketCasos}>En situación de desempleo</Text>
                    </View>

                    <View style={styles.ticketReducidoContainer}>
                        <View style={styles.ticketGeneralContainer}>
                            <Text style={styles.ticketTextLeft}>Entrada gratuita</Text>
                            <Text style={styles.ticketText}>0 €</Text>
                            <View style={styles.addTicketContainer}>
                                <Text style={styles.ticketText}>-</Text>
                                <Text style={{ ...styles.ticketText, paddingHorizontal: 18 }}>0</Text>
                                <Text style={styles.ticketText}>+</Text>
                            </View>
                        </View>
                        <Text style={styles.textTicketCasos}>Menor de 18 años</Text>
                        <Text style={styles.textTicketCasos}>Con discapacidad &gt;= 33% + Acompañante</Text>
                    </View>
                </View>

                <View style={styles.totalBtnContainer}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>
                            Total <Text style={styles.ivaText}>(IVA incluido)</Text>
                        </Text>
                        <Text style={styles.totalText}>0.00€</Text>
                    </View>
                    <AuthButton textButton={"Comprar"} onPressFromInterface={() => {}} />
                    <AuthButtonUnfilled textButton={"Cancelar"} onPressFromInterface={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    );
}

export default TicketSelectionScreen;
