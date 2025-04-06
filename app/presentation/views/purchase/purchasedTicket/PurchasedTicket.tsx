import React from "react";
import { ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppColors } from "../../../theme/AppTheme";
import stylesPurchasedTicket from "./StylesPurchasedTicket";
import Ticket from "../../../componentes/tickets/Ticket";
import { AuthButton } from "../../../componentes/auth/AuthButton";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../App";

type PurchasedRouteProp = RouteProp<RootStackParamList, "PurchasedTicketScreen">;
type NavigationType = NativeStackNavigationProp<RootStackParamList>;

function PurchasedTicketScreen() {
    const route = useRoute<PurchasedRouteProp>();
    const navigation = useNavigation<NavigationType>();
    const { pelicula, funcion, totalEntradas } = route.params;

    return (
        <View style={stylesPurchasedTicket.mainContainer}>
            <ImageBackground
                source={
                    pelicula?.imagenPoster
                        ? { uri: pelicula.imagenPoster }
                        : require("../../../../../assets/backgrounds/image_error.png")
                }
                style={stylesPurchasedTicket.image}
                resizeMode="cover"
            />


            <LinearGradient
                colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.9 }}
                style={stylesPurchasedTicket.mainGradientContainer}
            />
            <View style={stylesPurchasedTicket.infoContainer}>
                <Ticket
                    pelicula={pelicula}
                    funcion={funcion}
                    totalEntradas={totalEntradas}
                />
            </View>
            <View style={stylesPurchasedTicket.btnContainer}>
                <AuthButton
                    textButton={"Finalizar compra"}
                    onPressFromInterface={() => navigation.navigate("HomeScreen")}
                />
            </View>
        </View>
    );
}

export default PurchasedTicketScreen;
