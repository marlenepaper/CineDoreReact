import {ImageBackground, Pressable, StyleSheet} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";

interface iMovieItemProps{
    imagenPoster: any;
    navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen", undefined>
}

export const MovieItem = ({imagenPoster, navigation}:iMovieItemProps) => {

    return (
        <Pressable
            onPress={() =>{}}>
            <ImageBackground source={typeof imagenPoster === "string" ? { uri: imagenPoster } : imagenPoster}
                             resizeMode="cover"
                             style={styleMovieItem.container}/>
        </Pressable>

    )
}

const styleMovieItem = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 20,
        overflow: "hidden",
        height: 230,
        width: 175,
        marginBottom:8
    }
})