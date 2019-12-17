/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
const faker = require('faker')
const uuid = require('uuid')
const bcrypt = require('bcryptjs')

const createUser = () => ({
  id: uuid(),
  firstName: faker.name.firstName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync('1234'),
})

module.exports.seed = knex => {
  const users = []

  for (let i = 0; i < 5; i++) {
    users.push(createUser())
  }
  return knex('users').insert(users)
}
