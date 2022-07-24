import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function MyAccount() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Text>Account</Text>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default MyAccount;
