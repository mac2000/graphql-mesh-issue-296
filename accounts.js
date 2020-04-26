const { ApolloServer, gql } = require("apollo-server");

const accounts = [
  {
    id: "1",
    name: "Alex",
    username: "@mac"
  },
  {
    id: "2",
    name: "Yar",
    username: "@yar"
  }
];

const typeDefs = gql`
  type Query {
    accounts: [Account]!
    account(id: ID!): Account
  }

  type Account {
    id: ID!
    name: String
    username: String
  }
`;

const resolvers = {
  Query: {
    accounts: () => accounts,
    account: (_, { id }) => accounts.find(({ id: accountId }) => id === accountId)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => console.log("accounts:", url));
