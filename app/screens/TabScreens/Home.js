import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

function Home() {
  return (
    <NativeBaseProvider>
      <Center padding={10}>
        <Text>Home</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default Home;
