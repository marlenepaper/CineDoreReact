import React, { useState } from "react";
import { Image, Pressable, StyleSheet, View, Animated } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import imageError from "../../../../assets/backgrounds/image_error.png";
import imageDefault from "../../../../assets/backgrounds/Imagen_default.png";


interface iMovieItemProps {
    id: number;
    imagenPoster: string;
    navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen", undefined>;
}

export const MovieItem = ({ id, imagenPoster, navigation }: iMovieItemProps) => {
    const [hasError, setHasError] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(0));

    const handleLoad = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleError = () => {
        setHasError(true);
    };

    return (
        <Pressable onPress={() => navigation.navigate("MovieDetailsScreen", { id })}>
            <View style={styleMovieItem.container}>
                {/* Imagen de fondo por defecto */}
                <Image source={imageDefault} style={styleMovieItem.image} resizeMode="cover" />

                {/* Imagen real, con fade */}
                {!hasError && (
                    <Animated.Image
                        source={{ uri: imagenPoster }}
                        style={[styleMovieItem.image, { position: "absolute", opacity: fadeAnim }]}
                        resizeMode="cover"
                        onLoad={handleLoad}
                        onError={handleError}
                    />
                )}

                {/* Imagen de error si falla */}
                {hasError && (
                    <Image
                        source={imageError}
                        style={[styleMovieItem.image, { position: "absolute" }]}
                        resizeMode="cover"
                    />
                )}
            </View>
        </Pressable>
    );
};

const styleMovieItem = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 20,
        overflow: "hidden",
        height: 230,
        width: 175,
        marginBottom: 8,
        position: "relative",
    },
    image: {
        height: "100%",
        width: "100%",
    },
});
