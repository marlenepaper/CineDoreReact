// src/presentation/views/home/HomeScreen.tsx
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppColors } from "../../../theme/AppTheme";
import stylesRegister from "../../auth/register/StylesRegister";
import LogoCinedore from "../../../../../assets/icons/logo_completo.svg";
import LogoMinisterio from "../../../../../assets/icons/logo-ministerioCultura.svg";
import LogoFilmoteca from "../../../../../assets/icons/logo-filmoteca.svg";
import IconoInfo from "../../../../../assets/icons/informacion.svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CarouselItem } from "../../../componentes/home/CarouselItem";
import stylesHome from "./StylesHome";
import { MovieItem } from "../../../componentes/home/MovieItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../App";

// Use case y entidad
import { GetCarruselUseCase } from "../../../../domain/useCases/carrusel/carruselUsecase";
import { CarruselDTO } from "../../../../domain/entities/CarruselDTO";
import { GetAllPeliculasUseCase } from "../../../../domain/useCases/peliculas/GetAllPeliculasUse";
import { PeliculaDTO } from "../../../../domain/entities/PeliculaDTO";

// Props para navegación
interface PropsStackNavigation extends NativeStackScreenProps<RootStackParamList, "HomeScreen"> {}

function HomeScreen({ navigation }: PropsStackNavigation) {
    const width = Dimensions.get("window").width;

    // Estado para el carrusel
    const [carousel, setCarousel] = useState<CarruselDTO[]>([]);

    // Estado para las películas reales del back
    const [pelis, setPelis] = useState<PeliculaDTO[]>([]);

    // Obtiene los datos del carrusel desde el backend
    useEffect(() => {
        const fetchCarruselData = async () => {
            const result = await GetCarruselUseCase();
            setCarousel(result);  // Actualiza el estado con los datos del carrusel
        };

        fetchCarruselData();

        // Fetch para obtener las películas
        const fetchData = async () => {
            const result = await GetAllPeliculasUseCase();
            setPelis(result);
        };

        fetchData();
    }, []);

    // Función para renderizar las películas
    const renderItem = useCallback(
        ({ item }: { item: PeliculaDTO }) => (
            <MovieItem id={item.id!} imagenPoster={item.imagenPoster} navigation={navigation} />
        ),
        [navigation]
    );

    return (
        <View style={stylesHome.mainContainer}>
            <LinearGradient
                colors={[AppColors.bg_input_dark, AppColors.bg_input_dark, AppColors.prueba_claro, AppColors.prueba_claro]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={stylesRegister.mainGradient}
            />
            <View style={stylesHome.contentContainer}>
                {/* Encabezado y logos */}
                <View style={stylesHome.logosContainer}>
                    <View style={stylesHome.CinedoreMasInfo}>
                        <View style={stylesHome.logoCineDoreContainer}>
                            <LogoCinedore style={stylesHome.logoCineDore} width={150} height={40} />
                        </View>
                        <View style={stylesHome.info}>
                            <IconoInfo />
                        </View>
                    </View>
                    <View style={stylesHome.logosGobierno}>
                        <View style={stylesHome.logoMinisterio}>
                            <LogoMinisterio />
                        </View>
                        <View style={stylesHome.logoFilmoteca}>
                            <LogoFilmoteca />
                        </View>
                    </View>
                </View>

                {/* Carrusel */}
                <GestureHandlerRootView style={stylesHome.carousel}>
                    <FlatList
                        data={carousel}  // Aquí, el 'carousel' contiene los datos del carrusel
                        horizontal={true}
                        pagingEnabled
                        snapToAlignment="center"
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <CarouselItem
                                height={247}
                                width={width - 40}
                                movieItem={{
                                    image: item.imagenPoster,
                                    title: item.titulo,  // Cambié 'titulo' por 'title'
                                    description: item.subtitulo,  // Cambié 'subtitulo' por 'description'
                                }}
                            />
                        )}
                    />
                </GestureHandlerRootView>

                {/* Lista de películas reales */}
                <View style={stylesHome.moviesContainer}>
                    <FlatList
                        data={pelis}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id!.toString()}
                        initialNumToRender={6}
                        windowSize={6}
                        numColumns={2}
                        removeClippedSubviews={true}
                        columnWrapperStyle={{ gap: 15 }}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;
