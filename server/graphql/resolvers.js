const bcrypt = require('bcryptjs')
const uuid = require('uuid')
const db = require('../data/config')

const resolvers = {
  Query: {
    allUsers: () => db('users'),
    user: (_, { id }) =>
      db('users')
        .where({ id })
        .first(),
  },
  Mutation: {
    addUser: async (_, { firstName, email, password }) => {
      const id = uuid()
      const newUser = {
        id,
        firstName,
        email,
        password: bcrypt.hashSync(password),
      }
      const newUserReturn = { id, firstName, email }
      await db('users').insert(newUser)
      return newUserReturn
    },
  },
}

module.exports = resolvers
