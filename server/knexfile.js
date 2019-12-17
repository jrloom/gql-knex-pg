require('dotenv').config()
const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: path.join(__dirname, 'data', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'data', 'seeds'),
    },
  },
}
