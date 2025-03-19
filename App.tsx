import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./app/presentation/views/auth/login/LoginScreen";
import WelcomeScreen from "./app/presentation/views/auth/WelcomeScreen";
import RegisterScreen from "./app/presentation/views/auth/register/RegisterScreen";
import SplashScreen from "./app/presentation/views/auth/SplashScreen";

import MovieDetailsScreen from "./app/presentation/views/purchase/selectedMovie/MovieDetails";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import {AppColors} from "./app/presentation/theme/AppTheme";
import TicketSelection from "./app/presentation/views/purchase/ticketSelection/TicketSelection";
import UserProfileScreen from "./app/presentation/views/mainNav/userProfile/UserProfile";
import TicketListScreen from "./app/presentation/views/mainNav/ticketsList/TicketList";
import TheatreInfoScreen from "./app/presentation/views/mainNav/theatreInfo/TheatreInfo";
import HomeScreen from "./app/presentation/views/mainNav/home/Home";
import {ClientTabNavigator} from "./app/presentation/navigation/ClientTabNavigator";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigator";
import PurchasedTicketScreen from "./app/presentation/views/purchase/purchasedTicket/PurchasedTicket";


export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
  SplashScreen: undefined,
  WelcomeScreen: undefined,
  MovieDetailsScreen: undefined,
  TicketSelectionScreen: undefined,
  UserProfileScreen: undefined,
  TicketListScreen: undefined,
  TheatreInfoScreen: undefined,
  HomeScreen: undefined,
  AdminTabNavigator: undefined;
  ClientTabNavigator: undefined;
  PurchasedTicketScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const[fontsLoaded] = useFonts({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    })
    if(!fontsLoaded){
        return <ActivityIndicator size="large" color={AppColors.primary}
        style={{justifyContent: "center", alignSelf:"center", flex:1}}/>
    }else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{title:"Navegación de administración"}}></Stack.Screen>
                    <Stack.Screen name={"PurchasedTicketScreen"} component={PurchasedTicketScreen}></Stack.Screen>
                    <Stack.Screen name={"ClientTabNavigator"} component={ClientTabNavigator} options={{title:"Navegación de cliente"}}></Stack.Screen>
                    <Stack.Screen name={"TheatreInfoScreen"} component={TheatreInfoScreen}></Stack.Screen>
                    <Stack.Screen name={"TicketListScreen"} component={TicketListScreen}></Stack.Screen>
                    <Stack.Screen name={"UserProfileScreen"} component={UserProfileScreen}></Stack.Screen>
                    <Stack.Screen name={"SplashScreen"} component={SplashScreen}></Stack.Screen>
                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}></Stack.Screen>
                    <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen}></Stack.Screen>
                    <Stack.Screen name={"MovieDetailsScreen"} component={MovieDetailsScreen}></Stack.Screen>
                    <Stack.Screen name={"TicketSelectionScreen"} component={TicketSelection}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }}
