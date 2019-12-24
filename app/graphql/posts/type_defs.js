const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Query {
    post(id: ID, title: String): Post!
    posts(userId: ID): [Post]!
  }
`;

const customTypes = gql`
  type Post {
    id: ID!
    userId: ID!
    title: String!
    content: String!
    upvotes: Int!
    downvotes: Int!
    createdAt: String
    updatedAt: String
  }
`;

exports.typeDefs = [rootTypes, customTypes];
