import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

function MyAccount() {
  return (
    <NativeBaseProvider>
      <Center padding={10}>
        <Text>MyAccount</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default MyAccount;
