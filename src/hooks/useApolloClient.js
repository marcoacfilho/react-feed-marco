import { useEffect, useState } from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";

const uri = "http://localhost:4000/graphql";

const httpLink = createHttpLink({ uri });

export const useApolloClient = () => {
  const [client, setClient] = useState();

  useEffect(() => {
    async function init() {
      setClient(
        new ApolloClient({
          link: httpLink,
          cache: new InMemoryCache(),
        })
      );
    }

    init();
  }, []);

  return {
    client,
  };
};
