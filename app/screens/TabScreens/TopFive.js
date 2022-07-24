import { Center, NativeBaseProvider, Text } from "native-base";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function TopFive() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Text>TopFive</Text>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default TopFive;
