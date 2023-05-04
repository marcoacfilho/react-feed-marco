import React from "react";
import {
  CardHeader as ChakraCardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
} from "@chakra-ui/react";

const CardHeader = ({ author }) => {
  return (
    <ChakraCardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar
            name={`${author.firstName} ${author.lastName}`}
            src={author.avatar}
          />
          <Box>
            <Heading size="sm">{`${author.firstName} ${author.lastName}`}</Heading>
          </Box>
        </Flex>
      </Flex>
    </ChakraCardHeader>
  );
};

export default CardHeader;
