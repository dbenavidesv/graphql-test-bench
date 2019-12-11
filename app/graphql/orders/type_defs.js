const { gql } = require('apollo-server');

const customTypes = gql`
  type Order {
    id: ID!
    userId: ID!
  }
`;

exports.typeDefs = [customTypes];
