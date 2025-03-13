import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./app/presentation/views/auth/login/LoginScreen";
import WelcomeScreen from "./app/presentation/views/auth/WelcomeScreen";
import RegisterScreen from "./app/presentation/views/auth/register/RegisterScreen";
import SplashScreen from "./app/presentation/views/auth/SplashScreen";
import UserProfileScreen from "./app/presentation/views/mainNav/userProfile/userProfile";
import TicketListScreen from "./app/presentation/views/mainNav/ticketsList/ticketList";
import TheatreInfoScreen from "./app/presentation/views/mainNav/theatreInfo/theatreInfo";

export type RootStackParamList ={
  LoginScreen: undefined,
  RegisterScreen: undefined,
  SplashScreen: undefined,
  WelcomeScreen: undefined,
  UserProfileScreen: undefined,
  TicketListScreen: undefined,
  TheatreInfoScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"UserProfileScreen"} component={UserProfileScreen}></Stack.Screen>
            <Stack.Screen name={"TicketListScreen"} component={TicketListScreen}></Stack.Screen>
            <Stack.Screen name={"TheatreInfoScreen"} component={TheatreInfoScreen}></Stack.Screen>






            <Stack.Screen name={"SplashScreen"} component={SplashScreen}></Stack.Screen>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
            <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen}></Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>
  );
}
