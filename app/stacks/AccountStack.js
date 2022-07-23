import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccountScreen from "../screens/MyAccountStack/MyAccount";
import Register from "../screens/MyAccountStack/Register";

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={MyAccountScreen} />
      <AccountStack.Screen name="Register" component={Register} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
