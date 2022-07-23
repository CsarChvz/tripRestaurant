// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Native Base-
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import { HomeScreen, SearchScreen, TopFiveScreen } from "./app/screens";
import { AntDesign } from "@expo/vector-icons";
import MyAccountScreen from "./app/screens/MyAccountStack/MyAccount";
const Stack = createNativeStackNavigator();
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

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
