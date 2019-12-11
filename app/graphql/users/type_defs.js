const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Query {
    user(id: ID, firstName: String, email: String): User!
    users: [User]
  }
`;

const customTypes = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }
`;

exports.typeDefs = [rootTypes, customTypes];
