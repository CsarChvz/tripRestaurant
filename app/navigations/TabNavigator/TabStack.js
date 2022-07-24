// React Navigation Things
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  SearchScreen,
  TopFiveScreen,
  MyAccountScreen,
} from "../../screens/TabScreens";
import AntDesign from "@expo/vector-icons/AntDesign";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    // Navegador del tabuladir
    <Tab.Navigator
      initialRouteName="MyAccount"
      // Se ponen las opciones para las pantallas del tab
      screenOptions={{
        // No se muestra el header, el color del texto es negro cuando esta inactivo y el fondo cuando esta activo cambio
        headerShown: false,
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "#eee",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="TopFive"
        component={TopFiveScreen}
        options={{
          tabBarIcon: () => <AntDesign name="staro" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
