const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const db = require('../../data/config')

const addUser = async (_, { firstName, email, password }) => {
  const id = uuid()
  const userInput = { firstName, email, password: bcrypt.hashSync(password) }
  const newUser = { id, userInput }
  await db('users').insert(newUser)
  return newUser
}

module.exports = addUser
