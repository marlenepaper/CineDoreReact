import {StyleSheet, Text, View, Image, ImageBackground} from "react-native";
import MovieBox from "../movies/MovieBox";
import {MovieBoxInterface} from "../../interfaces/MoviesInterface";
import {AppColors, AppFonts} from "../../theme/AppTheme";

const TicketBox = () =>{
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
        <View style={stylesTicketBox.mainContainer}>
            <ImageBackground source={require("../../../../assets/images/ticket.png")}
            resizeMode={"contain"}
            style={stylesTicketBox.ticketContainer}>
                <View style={stylesTicketBox.qrContainer}>
                    <Image source={require("../../../../assets/images/qr.png")}/>
                </View>

                <View style={stylesTicketBox.amountContainer}>
                    <Text style={stylesTicketBox.amountText}>x3 entradas</Text>
                </View>
                <View style={stylesTicketBox.movieBoxContainer}>
                    <MovieBox movie={movie} color={AppColors.black} fontScale={0.97}/>
                </View>


            </ImageBackground>


        </View>
    )
}

const stylesTicketBox = StyleSheet.create({
    mainContainer:{
        flex: 1,
        width: '100%',
        height:'100%',
    },
    ticketContainer:{
        height:'100%',
        marginHorizontal:15,
        flexDirection:'column',
        alignSelf:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    qrContainer:{
      paddingTop: 60
    },
    amountContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop: -20,
        marginBottom: 22
    },
    amountText:{
        color:AppColors.black,
        fontSize: 23.2,
        fontFamily: AppFonts.bold
    },
    movieBoxContainer:{
        paddingBottom:50
    }

})


export default TicketBox;