import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Importa las pantallas desde tu estructura
import HomeScreen from '../views/mainNav/home/Home';
import TheatreInfoScreen from '../views/mainNav/theatreInfo/TheatreInfo';
import TicketsListScreen from '../views/mainNav/ticketsList/TicketList';
import UserProfileScreen from '../views/mainNav/userProfile/UserProfile';

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Inicio",
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../assets/icons/eye.png")}
                               style={{ width: 25, height: 25, tintColor: color }} />
                    )
                }}
            />
            <Tab.Screen
                name="TheatreInfo"
                component={TheatreInfoScreen}
                options={{
                    title: "Cines",
                    tabBarLabel: "Cines",
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../assets/icons/eye.png")}
                               style={{ width: 25, height: 25, tintColor: color }} />
                    )
                }}
            />
            <Tab.Screen
                name="TicketsList"
                component={TicketsListScreen}
                options={{
                    title: "Mis boletos",
                    tabBarLabel: "Boletos",
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../assets/icons/eye.png")}
                               style={{ width: 25, height: 25, tintColor: color }} />
                    )
                }}
            />
            <Tab.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{
                    title: "Perfil",
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../assets/icons/eye.png")}
                               style={{ width: 25, height: 25, tintColor: color }} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}