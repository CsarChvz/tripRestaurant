import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/AuthScreens";

// Se crea el stack
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
