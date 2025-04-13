import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { AppColors } from "./app/presentation/theme/AppTheme";

import LoginScreen from "./app/presentation/views/auth/login/LoginScreen";
import WelcomeScreen from "./app/presentation/views/auth/splash/WelcomeScreen";
import RegisterScreen from "./app/presentation/views/auth/register/RegisterScreen";
import SplashScreen from "./app/presentation/views/auth/splash/SplashScreen";

import MovieDetailsScreen from "./app/presentation/views/purchase/selectedMovie/MovieDetails";
import TicketSelectionScreen from "./app/presentation/views/purchase/ticketSelection/TicketSelection";
import PurchasedTicketScreen from "./app/presentation/views/purchase/purchasedTicket/PurchasedTicket";

import UserProfileScreen from "./app/presentation/views/mainNav/userProfile/UserProfile";
import TicketListScreen from "./app/presentation/views/mainNav/ticketsList/TicketList";
import TheatreInfoScreen from "./app/presentation/views/mainNav/theatreInfo/TheatreInfo";
import HomeScreen from "./app/presentation/views/mainNav/home/Home";
import { TabNavigator } from "./app/presentation/navigation/TabNavigator";
import { PeliculaDTO } from "./app/domain/entities/PeliculaDTO";
import { FuncionDTO } from "./app/domain/entities/FuncionDTO";


export type RootStackParamList = {
    SplashScreen: undefined;
    WelcomeScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    TabNavigator: undefined;
    TicketListScreen: undefined;
    UserProfileScreen: undefined;
    TheatreInfoScreen: undefined;
    MovieDetailsScreen: { id: number };
    TicketSelectionScreen: { funcionId: number; peliculaId: number };
    PurchasedTicketScreen: {
        pelicula: PeliculaDTO;
        funcion: FuncionDTO;
        totalEntradas: number;
    };
    HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <ActivityIndicator
                size="large"
                color={AppColors.primary}
                style={{ justifyContent: "center", alignSelf: "center", flex: 1 }}
            />
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ title: "Navegación" }} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="TicketListScreen" component={TicketListScreen} />
                    <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
                    <Stack.Screen name="TheatreInfoScreen" component={TheatreInfoScreen} />
                    <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
                    <Stack.Screen name="TicketSelectionScreen" component={TicketSelectionScreen} />
                    <Stack.Screen name="PurchasedTicketScreen" component={PurchasedTicketScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
