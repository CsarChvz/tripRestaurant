import { Button, Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export default class MyAccount extends React.Component {
  onGo = () => {
    this.props.navigation.navigate("Register");
  };
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text>MyAccount</Text>
          <Button onPress={() => this.onGo()}>Go to Register</Button>
        </Center>
      </NativeBaseProvider>
    );
  }
}
