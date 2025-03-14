import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Importa las pantallas desde tu estructura
import HomeScreen from '../views/mainNav/home/Home';
import TheatreInfoScreen from '../views/mainNav/theatreInfo/TheatreInfo';
import TicketsListScreen from '../views/mainNav/ticketsList/TicketList';
import UserProfileScreen from '../views/mainNav/userProfile/UserProfile';

const Tab = createBottomTabNavigator();

export const ClientTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Lista de categorías",
                    tabBarLabel: "Inicio",
                    headerShown: true,
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
                    title: "Pedidos realizados",
                    tabBarLabel: "Pedidos",
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
                    title: "Mi perfil",
                    tabBarLabel: "Mi perfil",
                    tabBarIcon: ({ color }) => (
                        <Image source={require("../../../assets/icons/eye.png")}
                               style={{ width: 25, height: 25, tintColor: color }} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
