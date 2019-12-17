const db = require('../../data/config')

const allUsers = () => db('users')

const user = (_, { id }) =>
  db('users')
    .where({ id })
    .first()

module.exports = {
  allUsers,
  user,
}
