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

export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
  SplashScreen: undefined,
  WelcomeScreen: undefined,
  MovieDetailsScreen: undefined
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

                    <Stack.Screen name={"SplashScreen"} component={SplashScreen}></Stack.Screen>
                    <Stack.Screen name={"MovieDetailsScreen"} component={MovieDetailsScreen}></Stack.Screen>
                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}></Stack.Screen>
                    <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen}></Stack.Screen>

                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
