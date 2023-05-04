import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FETCH_FEED } from "../queries/fetchFeed";
import Card from "../components/card";
import { Spinner, Flex, SimpleGrid, Input, Button } from "@chakra-ui/react";

const Feed = () => {
  const { data, loading } = useQuery(FETCH_FEED, {
    variables: {
      limit: 10,
    },
  });
  const [feedData, setFeedData] = useState([]);
  const [searchText, setSearchText] = useState(null);

  const handleFilterByTopic = () => {
    const inputValue = searchText.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength !== 0) {
      const inputWords = inputValue?.split(' ')
      const dynamicRegex = inputWords.map(word => `(?=.*${word})`).join('')

      const newFeedData = data?.fetchFeed?.filter(feed => {
        return feed.topics.some(item => item.name.toLowerCase().match(dynamicRegex))
      })

      setFeedData(newFeedData)
    } else {
      setFeedData(data.fetchFeed)
    }
  };

  useEffect(() => {
    if (data?.fetchFeed?.length > 0) {
      setFeedData(data.fetchFeed);
    }
  }, [data, loading]);

  if (loading) {
    return (
      <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }
  return (
    <Flex p="50px" flexDir="column" gap="15px">
      <Flex gap="20px">
        <Input
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleFilterByTopic}>Search</Button>
      </Flex>
      <SimpleGrid columns={4} spacing={10}>
        {feedData?.map((feed) => (
          <Card key={feed.id} feed={feed} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Feed;
