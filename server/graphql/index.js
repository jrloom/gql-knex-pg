const Query = require('./Query')
const User = require('./Resolver/user')

const resolvers = {
  Query,
  User,
}

module.exports = { resolvers }
