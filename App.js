// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigations/AuthNavigator/AuthStack";
import { TabNavigator } from "./app/navigations/TabNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
