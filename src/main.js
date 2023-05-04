import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import { useApolloClient } from "./hooks/useApolloClient";
import Feed from "./containers/feed";

const Main = () => {
  const { client } = useApolloClient();

  return client ? (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Feed />
      </ApolloProvider>
    </ChakraProvider>
  ) : null;
};

export default Main;
