const cors = require('cors')
const morgan = require('morgan')

module.exports = middleware => {
  middleware.use(cors())
  middleware.use(morgan('dev'))
}
