const Query = require('./Query')
const Mutation = require('./Mutation')
const User = require('./Resolver/user')

const resolvers = {
  Query,
  Mutation,
  User,
}

module.exports = { resolvers }
