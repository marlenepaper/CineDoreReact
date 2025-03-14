import {ImageBackground, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AppColors} from "../../../theme/AppTheme";
import stylesPurchasedTicket from "./StylesPurchasedTicket";
import Ticket from "../../../componentes/tickets/Ticket";
import {AuthButton} from "../../../componentes/auth/AuthButton";

function PurchasedTicketScreen(){
    return(
        <View style={stylesPurchasedTicket.mainContainer}>
            <ImageBackground source={require("../../../../../assets/images/img_pelicula.png")}
                             style={stylesPurchasedTicket.image}
                             resizeMode={"cover"}/>
            <LinearGradient colors={["transparent", AppColors.tertiary_dark,  AppColors.tertiary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0.9 }}
                            style={stylesPurchasedTicket.mainGradientContainer}/>
            <View style={stylesPurchasedTicket.infoContainer}>
                <Ticket/>
            </View>
            <View style={stylesPurchasedTicket.btnContainer}>
                <AuthButton textButton={"Finalizar compra"} onPressFromInterface={() =>{}}/>
            </View>

        </View>
    )
}


export default PurchasedTicketScreen
