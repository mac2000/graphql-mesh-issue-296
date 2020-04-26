const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const articles = [
  {
    id: "1",
    title: "article1",
    body: "article1 body"
  },
  {
    id: "2",
    title: "article2",
    body: "article2 body"
  },
  {
    id: "3",
    title: "article3",
    body: "article3 body"
  }
];

const typeDefs = gql`
  type Query {
    articles: [Article]!
    article(id: ID!): Article
  }

  type Article @key(fields: "id") {
    id: ID!
    title: String
    body: String
  }
`;

const resolvers = {
  Query: {
    articles: () => articles,
    article: (_, { id }) => articles.find(({ id: articleId }) => id === articleId)
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 4002 }).then(({ url }) => console.log("articles:", url));