import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
function Search() {
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

export default Search;
