import {StyleSheet, Text, View,Image} from "react-native";
import Ticket from "../../../../assets/images/ticket.svg"
import MovieBox from "../movies/MovieBox";
import {MovieBoxInterface} from "../../interfaces/MoviesInterface";

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
        <View>
            <Ticket>
                <Image source={require("../../../../assets/images/img_pelicula.png")}></Image>
            </Ticket>
            <MovieBox movie={movie}></MovieBox>
            <Text>hola</Text>
        </View>
    )
}

const style = StyleSheet.create({

})

export default TicketBox;