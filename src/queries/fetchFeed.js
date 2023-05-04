import { gql } from "@apollo/client";

export const FETCH_FEED = gql`
  query fetchFeed($limit: Int) {
    fetchFeed(limit: $limit) {
      author {
        avatar
        firstName
        id
        lastName
      }
      body
      id
      title
      topics {
        id
        name
      }
    }
  }
`;
