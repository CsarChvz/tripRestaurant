import { Button, NativeBaseProvider, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

function HomeScreen({ navigation }) {
  const goLogin = () => {
    navigation.navigate("Login");
  };
  const goRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <>
      <NativeBaseProvider>
        <View style={styles.titleContainer}>
          <Text title="Bienvenido a SquareCo" />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Crear cuenta" onPress={goRegister}>
            Crear cuenta
          </Button>
          <View style={styles.separacion} />
          <Button title="Iniciar sesión" onPress={goLogin}>
            Iniciar sesión
          </Button>
        </View>
      </NativeBaseProvider>
    </>
  );
}
const styles = StyleSheet.create({
  a: {
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    flex: 1,
    marginTop: -120,
    justifyContent: "center",
    width: "70%",
    paddingHorizontal: 30,
  },
  separacion: {
    padding: 10,
  },
});
export default HomeScreen;
