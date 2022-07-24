import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Center>
          <Text>Search</Text>
        </Center>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default Home;
