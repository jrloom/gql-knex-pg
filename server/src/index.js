require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const middleware = require('../middleware/global')
const typeDefs = require('../graphql/schema')
const resolvers = require('../graphql/resolvers')

const app = express()
const port = process.env.PORT

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

middleware(app)

server.applyMiddleware({ app, path: '/graphql' })

app.listen(port, () => console.log(`server listening on port ${port}`))
