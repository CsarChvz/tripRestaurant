// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigations/AuthNavigator/AuthStack";
import { TabNavigator } from "./app/navigations/TabNavigator";
function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
