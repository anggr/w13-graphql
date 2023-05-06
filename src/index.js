

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const userTypeDefs = require('./schema/userTypeDefs');
const userResolvers = require('./resolvers/userResolvers');

const prisma = new PrismaClient();

const resolvers = {
  ...userResolvers,
};

const schema = makeExecutableSchema({ typeDefs: userTypeDefs, resolvers });

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return {
      prisma,
      req,
    };
  },
});

(async () => {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
