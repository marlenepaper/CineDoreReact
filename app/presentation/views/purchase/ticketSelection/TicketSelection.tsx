import {ImageBackground,Text, TouchableOpacity, View} from "react-native";
import BackArrow from "../../../../../assets/icons/chevron-left.svg";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import {AuthButton} from "../../../componentes/auth/AuthButton";
import {AuthButtonUnfilled} from "../../../componentes/auth/AuthButtonUnfilled";
import stylesTicketSelection from "./StylesTicketSelection";
import {MovieBoxInterface} from "../../../interfaces/MoviesInterface";
import MovieBox from "../../../componentes/movies/MovieBox";

function TicketSelectionScreen() {
    const movie: MovieBoxInterface = {
        age: 18,
        name: "La Dolce Vita",
        duration: "1h 14 m",
        version: "VOSE",
        date: "2025-01-15",
        time: "17:00",
        room: 1
    }

    return (
        <View style={stylesTicketSelection.mainContainer}>
            <ImageBackground source={require("../../../../../assets/images/img_pelicula.png")}
                             style={stylesTicketSelection.image}
                             resizeMode={"cover"}/>
            <View style={stylesTicketSelection.backContainer}>
                <TouchableOpacity style={stylesTicketSelection.backTouchable}>
                    <BackArrow/>
                    <Text style={stylesTicketSelection.backText}>Atrás</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient colors={["transparent", AppColors.tertiary_dark,  AppColors.tertiary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0.9 }}
                            style={stylesTicketSelection.mainGradientContainer}/>

            <View style={stylesTicketSelection.infoContainer}>
                <MovieBox movie={movie} color={AppColors.white}/>
                <View style={stylesTicketSelection.pricesContainer}>
                    <View style={stylesTicketSelection.ticketGeneralContainer}>
                        <Text style={stylesTicketSelection.ticketTextLeft}>Entrada general</Text>
                        <Text style={stylesTicketSelection.ticketText}> 3 €</Text>
                        <View style={stylesTicketSelection.addTicketContainer}>
                            <Text style={stylesTicketSelection.ticketText}>-</Text>
                            <Text style={{...stylesTicketSelection.ticketText, paddingHorizontal: 18}}>0</Text>
                            <Text style={stylesTicketSelection.ticketText}>+</Text>
                        </View>
                    </View>
                    <View style={stylesTicketSelection.ticketReducidoContainer}>
                        <View style={stylesTicketSelection.ticketGeneralContainer}>
                            <Text style={stylesTicketSelection.ticketTextLeft}>Entrada reducida</Text>
                            <Text style={stylesTicketSelection.ticketText}>2 €</Text>
                            <View style={stylesTicketSelection.addTicketContainer}>
                                <Text style={stylesTicketSelection.ticketText}>-</Text>
                                <Text style={{...stylesTicketSelection.ticketText, paddingHorizontal: 18}}>0</Text>
                                <Text style={stylesTicketSelection.ticketText}>+</Text>
                            </View>
                        </View>
                        <Text style={stylesTicketSelection.textTicketCasos}>Estudiantes</Text>
                        <Text style={stylesTicketSelection.textTicketCasos}>Familias numerosas</Text>
                        <Text style={stylesTicketSelection.textTicketCasos}>Grupos vinculados a instituciones culturales o educativas</Text>
                        <Text style={stylesTicketSelection.textTicketCasos}>Mayoresde 65 años</Text>
                        <Text style={stylesTicketSelection.textTicketCasos}>En situación de desempleo</Text>
                    </View>
                    <View style={stylesTicketSelection.ticketReducidoContainer}>
                        <View style={stylesTicketSelection.ticketGeneralContainer}>
                            <Text style={stylesTicketSelection.ticketTextLeft}>Entrada gratuita</Text>
                            <Text style={stylesTicketSelection.ticketText}>0 €</Text>
                            <View style={stylesTicketSelection.addTicketContainer}>
                                <Text style={stylesTicketSelection.ticketText}>-</Text>
                                <Text style={{...stylesTicketSelection.ticketText, paddingHorizontal: 18}}>0</Text>
                                <Text style={stylesTicketSelection.ticketText}>+</Text>
                            </View>
                        </View>
                        <Text style={stylesTicketSelection.textTicketCasos}>Menor de 18 años</Text>
                        <Text style={stylesTicketSelection.textTicketCasos}>Con discapacidad &gt;= 33% + Acompañante</Text>
                    </View>
                </View>
                <View style={stylesTicketSelection.totalBtnContainer}>
                    <View style={stylesTicketSelection.totalContainer}>
                        <Text style={stylesTicketSelection.totalText}>Total <Text
                            style={stylesTicketSelection.ivaText}>(IVA incluido)</Text></Text>
                        <Text style={stylesTicketSelection.totalText}>0.00€</Text>
                    </View>
                    <AuthButton textButton={"Comprar"} onPressFromInterface={()=>{}}/>
                    <AuthButtonUnfilled textButton={"Cancelar"} onPressFromInterface={() =>{}}/>
                </View>
            </View>
        </View>
    )
}



export default TicketSelectionScreen