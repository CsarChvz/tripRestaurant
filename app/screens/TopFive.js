import { Center, NativeBaseProvider, Text } from "native-base";

import React from "react";

function TopFive() {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>TopFive</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default TopFive;
