import React, { useEffect, useState } from "react";
import {ImageBackground, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
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
import {red} from "react-native-reanimated/lib/typescript/Colors";
import {CompraDTO} from "../../../../domain/entities/CompraDTO";
import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import {TicketEntradaDTO} from "../../../../domain/entities/TicketEntradaDTO";
import TicketSelectionViewModel from "./ViewModel";

type TicketSelectionRouteProp = RouteProp<RootStackParamList, "TicketSelectionScreen">;
type NavigationType = NativeStackNavigationProp<RootStackParamList, "TicketSelectionScreen">;

function TicketSelectionScreen() {
    const route = useRoute<TicketSelectionRouteProp>();
    const navigation = useNavigation<NavigationType>();
    const { funcionId, peliculaId } = route.params;
    const {user} = useUserLocalStorage()
    const {makeCompra} = TicketSelectionViewModel()
    const [pelicula, setPelicula] = useState<PeliculaDTO | null>(null);
    const [generalCount, setGeneralCount] = useState(0);
    const [reducedCount, setReducedCount] = useState(0);
    const [freeCount, setFreeCount] = useState(0);
    const [totalTickets, setTotalTickets] = useState(0);
    const precioGeneral = 3;
    const precioReducida = 2;
    const total = generalCount * precioGeneral + reducedCount * precioReducida;


    useEffect(() => {
        const fetchData = async () => {
            const data = await GetPeliculaByIdUseCase(peliculaId);
            setPelicula(data);
        };
        fetchData();
    }, [peliculaId]);

    useEffect(() => {
        const totalNum = generalCount + reducedCount + freeCount;
        setTotalTickets(Math.max(0, totalNum));
    }, [generalCount, reducedCount, freeCount]);
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

    const handleBuyTicket = async () =>{
        if (user?.id && funcionId){
            const posiblesTickets = [
                { tipoEntradaId: 1, cantidad: generalCount },
                { tipoEntradaId: 2, cantidad: reducedCount },
                { tipoEntradaId: 3, cantidad: freeCount }
            ];

            const listaTickets = posiblesTickets.filter(ticket => ticket.cantidad > 0);
            console.log(listaTickets)
            if (listaTickets.length > 0) {
                const compra: CompraDTO = {
                    usuarioId: user.id,
                    funcionId: funcionId,
                    totalPago: total,
                    tickets: listaTickets
                }
                const response = await makeCompra(compra)
                if (response.id && pelicula && funcion){
                    ToastAndroid.show("Compra realizada", ToastAndroid.SHORT)
                    navigation.navigate("PurchasedTicketScreen", {
                        pelicula: pelicula,
                        funcion: funcion,
                        totalEntradas: totalTickets,
                        compra: response
                    });
                }

            }
        }


    }
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={
                    pelicula?.imagenPoster
                        ? { uri: pelicula.imagenPoster }
                        : require("../../../../../assets/backgrounds/image_error.png")
                }
                style={styles.image}
                resizeMode="cover"
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

                <View style={styles.pricesContainer}>
                    <View style={styles.ticketGeneralContainer}>
                        <Text style={styles.ticketTextLeft}>Entrada general</Text>
                        <Text style={styles.ticketText}>3 €</Text>
                        <View style={styles.addTicketContainer}>
                            <TouchableOpacity onPress={() => {
                                setGeneralCount(Math.max(0, generalCount - 1))
                            }}>
                                <Text style={styles.ticketText}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ ...styles.ticketText, paddingHorizontal: 18 }}>{generalCount}</Text>
                            <TouchableOpacity onPress={() => {
                                setGeneralCount(generalCount + 1)
                            }}>
                                <Text style={styles.ticketText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ticketReducidoContainer}>
                        <View style={styles.ticketGeneralContainer}>
                            <Text style={styles.ticketTextLeft}>Entrada reducida</Text>
                            <Text style={styles.ticketText}>2 €</Text>
                            <View style={styles.addTicketContainer}>
                                <TouchableOpacity onPress={() => {
                                    setReducedCount(Math.max(0, reducedCount - 1))
                                }}>
                                    <Text style={styles.ticketText}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ ...styles.ticketText, paddingHorizontal: 18 }}>{reducedCount}</Text>
                                <TouchableOpacity onPress={() => {
                                    setReducedCount(reducedCount + 1)
                                }}>
                                    <Text style={styles.ticketText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.textTicketCasos}>Estudiantes</Text>
                        <Text style={styles.textTicketCasos}>Familias numerosas</Text>
                        <Text style={styles.textTicketCasos}>Grupos culturales</Text>
                        <Text style={styles.textTicketCasos}>Mayores de 65 años</Text>
                        <Text style={styles.textTicketCasos}>En situación de desempleo</Text>
                    </View>

                    <View style={styles.ticketReducidoContainer}>
                        <View style={styles.ticketGeneralContainer}>
                            <Text style={styles.ticketTextLeft}>Entrada gratuita</Text>
                            <Text style={styles.ticketText}>0 €</Text>
                            <View style={styles.addTicketContainer}>
                                <TouchableOpacity onPress={() => {
                                    setFreeCount(Math.max(0, freeCount - 1))
                                }}>
                                    <Text style={styles.ticketText}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ ...styles.ticketText, paddingHorizontal: 18 }}>{freeCount}</Text>
                                <TouchableOpacity onPress={() => {
                                    setFreeCount(freeCount + 1)
                                }}>
                                    <Text style={styles.ticketText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.textTicketCasos}>Menor de 18 años</Text>
                        <Text style={styles.textTicketCasos}>Con discapacidad ≥ 33% + Acompañante</Text>
                    </View>
                </View>

                <View style={styles.totalBtnContainer}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>
                            Total <Text style={styles.ivaText}>x {totalTickets}</Text>
                        </Text>
                        <Text style={styles.totalText}>{total.toFixed(2)}€</Text>
                    </View>

                    <AuthButton
                        textButton={"Comprar"}
                        onPressFromInterface={() => handleBuyTicket()}
                    />
                    <AuthButtonUnfilled textButton={"Cancelar"} onPressFromInterface={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    );
}

export default TicketSelectionScreen;
