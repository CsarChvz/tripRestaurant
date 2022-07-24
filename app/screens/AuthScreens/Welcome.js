import React from "react";
import { NativeBaseProvider, Center, Text } from "native-base";
function Welcome(props) {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Welcome</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default Welcome;
