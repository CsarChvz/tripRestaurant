// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, NativeBaseProvider } from "native-base";
// Native Base-
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import {
  HomeScreen,
  SearchScreen,
  MyAccountScreen,
  TopFiveScreen,
} from "./app/screens";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="TopFive" component={TopFiveScreen} />
      <Tab.Screen name="MyAccount" component={MyAccountScreen} />
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
