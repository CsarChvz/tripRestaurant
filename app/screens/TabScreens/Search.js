import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

function Search() {
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Search</Text>
      </Center>
    </NativeBaseProvider>
  );
}

export default Search;
