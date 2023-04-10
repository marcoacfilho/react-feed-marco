const http = require("http");
const fs = require("fs");
const R = require("ramda");

const { faker } = require("@faker-js/faker");
const { buildSchema } = require("graphql");

const { addMocksToSchema } = require("@graphql-tools/mock");
const { createYoga } = require("graphql-yoga");

const typeDefs = fs.readFileSync("./schema.graphql").toString();
const schema = buildSchema(typeDefs);

const withMocks = addMocksToSchema({
  schema,
  mocks: {
    User: () => {
      return {
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        firstName: faker.name.firstName,
        lastName: faker.name.lastName,
      };
    },
    Post: () => {
      return {
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
      };
    },
  },
  resolvers: (_) => ({
    Query: {
      fetchFeed: (_, { limit }) => {
        return R.range(0, limit).map((_) => ({}));
      },
    },
  }),
});

http
  .createServer(
    createYoga({
      schema: withMocks,
      cors: (request) => {
        const requestOrigin = request.headers.get("origin");
        return {
          origin: requestOrigin,
          credentials: true,
          allowedHeaders: ["content-type"],
          methods: ["POST"],
        };
      },
    })
  )
  .listen(4000, () => {
    console.log(
      "GraphQL Mock Server is listening on http://localhost:4000/graphql"
    );
  });