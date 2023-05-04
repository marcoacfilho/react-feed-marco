import React from "react";
import { CardFooter, Text } from "@chakra-ui/react";

const CardTopics = ({ topics }) => (
  <>
    <Text pl="20px" fontWeight={800} fontSize="14px">
      Topics
    </Text>
    <CardFooter gap="10px">
      {topics?.map((topic, idx) => (
        <Text key={idx} fontSize="12px">
          {topic.name}
        </Text>
      ))}
    </CardFooter>
  </>
);

export default CardTopics;
