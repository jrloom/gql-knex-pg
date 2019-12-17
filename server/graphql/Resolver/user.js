const db = require('../../data/config')

module.exports = {
  id: parent => parent.id,
  firstName: parent => parent.title,
  email: parent => parent.email,
  password: parent => parent.password,
}
