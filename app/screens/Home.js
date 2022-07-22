import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

function Home() {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Home</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default Home;
