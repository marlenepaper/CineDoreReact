import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {Dimensions, FlatList, ImageBackground, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import ImageBg from "../../../../../assets/images/asientos.svg";
import ImageBgTwo from "../../../../../assets/images/flores.svg";
import TicketListViewModel from "./ViewModel";
import React, {useCallback, useEffect, useState} from "react";
import {TicketDisplayDTO} from "../../../../domain/entities/TicketDisplayDTO";
import Ticket from "../../../componentes/tickets/Ticket";
import {PeliculaDTO} from "../../../../domain/entities/PeliculaDTO";
import {FuncionDTO} from "../../../../domain/entities/FuncionDTO";
import stylesTicketList from "./StylesTicketList";

const { height} = Dimensions.get('window');
function TicketListScreen({navigation}: PropsStackNavigation) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {user, getTicketsByUser, tickets} = TicketListViewModel()
    useEffect(() => {
        if (user && user.id){
            getTicketsByUser(user.id)
        }
    }, [user?.id]);
    const renderItem = useCallback(
        ({ item, index }: { item: TicketDisplayDTO, index: number }) => {
            const pelicula: PeliculaDTO ={
                nombre: item.tituloPelicula,
                duracion: item.duracion,
                imagenPoster: item.imagenPelicula,
                clasificacion: item.clasificacion,
                lenguaje: item.lenguaje,
            }
            const funcion: FuncionDTO={
                fechaHora: item.fechaFuncion,
                sala: item.sala
            }
        return (
            <View style={{...stylesTicketList.ticketWrapper, opacity: currentIndex === index ? 1 : 0.3,}}>
                <Ticket
                    pelicula={pelicula}
                    funcion={funcion}
                    totalEntradas={item.cantidadTickets}
                    codigoQr={item.codigoQr}
                />
            </View>
        );
    }, []);
    if (tickets.length > 0){
        return(
            <View style={stylesTicketList.mainContainer}>
                <ImageBackground
                    source={
                        tickets[currentIndex]?.imagenPelicula
                            ? { uri: tickets[currentIndex].imagenPelicula }
                            : require("../../../../../assets/backgrounds/image_error.png")
                    }
                    style={stylesTicketList.image}
                    resizeMode="cover"/>
                <LinearGradient
                colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.9 }}
                style={stylesTicketList.mainGradientContainer}
            />
                <FlatList
                    data={tickets}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.codigoQr}
                    pagingEnabled
                    snapToAlignment="start"
                    decelerationRate="fast"
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        const index = Math.round(event.nativeEvent.contentOffset.y / height);
                        setCurrentIndex(index);
                    }}
                    getItemLayout={(_, index) => ({
                        length: height,
                        offset: height * index,
                        index,
                    })}
                />
            </View>

        )
    }else{
        return (
            <View style={stylesTicketList.bgContainer}>
                <LinearGradient
                    colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={stylesRegister.mainGradient}
                />

                <View style={stylesTicketList.bgImgContainer}>
                    <ImageBgTwo/>
                    <View style={stylesTicketList.bgImgBabyContainer}>
                        <ImageBg/>
                        <View style={stylesTicketList.content}>
                            <Text style={stylesTicketList.welcomeText}>Aún no cuentas con</Text>
                            <Text style={stylesTicketList.welcomeText}>alguna entrada activa</Text>
                        </View>
                    </View>

                </View>

            </View>
        )
    }
}



export default TicketListScreen;