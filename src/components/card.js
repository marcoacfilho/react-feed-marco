import React from "react";
import {
  Card as ChakraCard,
  CardBody,
  Text,
} from "@chakra-ui/react";
import CardHeader from "../components/cardHeader";
import CardTopics from "./cardTopics";

const Card = ({ feed }) => {
  return (
    <ChakraCard maxW="md">
      <CardHeader author={feed.author} />
      <CardBody>
        <Text fontWeight={800} fontSize="16px" mb="20px">
          {feed.title}
        </Text>
        <Text>{feed.body}</Text>
      </CardBody>
      <CardTopics topics={feed.topics} />
    </ChakraCard>
  );
};

export default Card;
