const { ApolloServer: ApolloServerLambda, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type User {
    id: ID
    name: String
  }
  type Query {
    me: User
  }
  type Mutation {
    log(message: String): String
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return { id: 1, name: 'John' };
    }
  },
  Mutation: {
    log: (parent, args) => {
      const { message } = args;
      const info = `logging: ${message}`;
      console.log(info);
      return info;
    }
  }
};

const server = new ApolloServerLambda({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    functionName: context.functionName,
    headers: event.headers
  }),
  playground: {
    endpoint: '/Prod/graphql'
  },
  introspection: true
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
