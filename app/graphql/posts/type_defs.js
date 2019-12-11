const { gql } = require('apollo-server');

const customTypes = gql`
  type Post {
    id: ID!
    userId: ID!
    title: String!
    content: String!
    upvotes: Int!
    downvotes: Int!
  }
`;

exports.typeDefs = [customTypes];
