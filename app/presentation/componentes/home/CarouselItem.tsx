import {HomeCarousel} from "../../interfaces/MoviesInterface";
import {StyleSheet, View, Text, ImageBackground} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface Props{
    movieItem: HomeCarousel,
    width: number,
    height: number,
}


export const CarouselItem = ({movieItem, height, width}: Props)=>{

    return (
        <ImageBackground source={typeof movieItem.image === "string" ? { uri: movieItem.image } : movieItem.image}
                         resizeMode="cover"
                         style={{...styleCarouselItem.container, width: width, height: height}}>
            <View style={styleCarouselItem.textContainer}>
                <Text style={styleCarouselItem.description}>{movieItem.description}</Text>
                <Text style={styleCarouselItem.title}>{movieItem.title}</Text>
            </View>
        </ImageBackground>
    )
}

const styleCarouselItem = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 25,
        overflow: "hidden",
    },
    textContainer:{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        bottom: 15,
        left: 15,
    },
    description:{
        fontFamily: AppFonts.regular,
        fontSize: 10,
        color: AppColors.white
    },
    title:{
        fontFamily: AppFonts.bold,
        fontSize: 20,
        color: AppColors.white,
        textTransform: "uppercase",
    }
})