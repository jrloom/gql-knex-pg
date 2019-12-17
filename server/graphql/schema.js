const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User
    allUsers: [User]
  }

  type Mutation {
    addUser(firstName: String!, email: String!, password: String!): User
  }
`

module.exports = typeDefs
