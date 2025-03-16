import React, { useState, useEffect } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg";
import { LinearGradient } from "expo-linear-gradient";
import { AppColors } from "../../../theme/AppTheme";
import { AuthButton } from "../../../componentes/auth/AuthButton";
import { AuthButtonUnfilled } from "../../../componentes/auth/AuthButtonUnfilled";
import stylesTicketSelection from "./StylesTicketSelection";
import MovieBox from "../../../componentes/movies/MovieBox";
import { PeliculaDTOInterface, FuncionDTO } from "../../../interfaces/MoviesInterface";

interface TicketSelectionScreenProps {
    movie: PeliculaDTOInterface;
}

const TicketSelectionScreen: React.FC<TicketSelectionScreenProps> = ({ movie }) => {
    const [selectedFunction, setSelectedFunction] = useState<FuncionDTO | null>(null);

    useEffect(() => {
        if (movie.funciones.length > 0) {
            setSelectedFunction(movie.funciones[0]);
        }
    }, [movie.funciones]);

    if (!selectedFunction) {
        return <Text>No hay funciones disponibles</Text>;
    }

    return (
        <View style={stylesTicketSelection.mainContainer}>
            <ImageBackground
                source={{ uri: movie.imagenPoster }}
                style={stylesTicketSelection.image}
                resizeMode="cover"
            />

            <View style={stylesTicketSelection.backContainer}>
                <TouchableOpacity style={stylesTicketSelection.backTouchable}>
                    <BackArrow />
                    <Text style={stylesTicketSelection.backText}>Atrás</Text>
                </TouchableOpacity>
            </View>

            <LinearGradient
                colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.9 }}
                style={stylesTicketSelection.mainGradientContainer}
            />

            <View style={stylesTicketSelection.infoContainer}>
                <MovieBox movie={movie} color={AppColors.white} selectedFunctionId={selectedFunction.id} />

                <View style={stylesTicketSelection.pricesContainer}>
                    <View style={stylesTicketSelection.ticketGeneralContainer}>
                        <Text style={stylesTicketSelection.ticketTextLeft}>Entrada general</Text>
                        <Text style={stylesTicketSelection.ticketText}>3 €</Text>
                    </View>
                    <View style={stylesTicketSelection.ticketReducidoContainer}>
                        <Text style={stylesTicketSelection.ticketTextLeft}>Entrada reducida</Text>
                        <Text style={stylesTicketSelection.ticketText}>2 €</Text>
                    </View>
                </View>

                <View style={stylesTicketSelection.totalBtnContainer}>
                    <View style={stylesTicketSelection.totalContainer}>
                        <Text style={stylesTicketSelection.totalText}>
                            Total <Text style={stylesTicketSelection.ivaText}>(IVA incluido)</Text>
                        </Text>
                        <Text style={stylesTicketSelection.totalText}>0.00€</Text>
                    </View>
                    <AuthButton textButton="Comprar" onPressFromInterface={() => {}} />
                    <AuthButtonUnfilled textButton="Cancelar" onPressFromInterface={() => {}} />
                </View>
            </View>
        </View>
    );
};

export default TicketSelectionScreen;