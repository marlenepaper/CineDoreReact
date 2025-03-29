import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Feather, Ionicons } from 'react-native-vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Importa las pantallas desde tu estructura
import HomeScreen from '../views/mainNav/home/Home';
import UserProfileScreen from '../views/mainNav/userProfile/UserProfile';
import TicketListScreen from "../views/mainNav/ticketsList/TicketList";

// Define los tipos para la navegación del TabNavigator
export type RootTabParamList = {
    HomeScreen: undefined;
    TicketListScreen: undefined;
    UserProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    height: 70,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 5,
                    marginHorizontal: 13,
                    paddingTop: 6
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 4
                },
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Cartelera",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="film" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="TicketListScreen"
                component={TicketListScreen}
                options={{
                    tabBarLabel: "Entradas",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="qr-code-outline" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="UserProfileScreen"
                component={UserProfileScreen}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};
