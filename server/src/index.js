require('dotenv').config()

const express = require('express')

const middleware = require('../middleware/global')

const app = express()
const port = process.env.PORT

middleware(app)

app.listen(port, () => console.log(`server listening on port ${port}`))
