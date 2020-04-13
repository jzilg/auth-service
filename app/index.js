require('dotenv').config()
const express = require('express')
const routes = require('./router')
const loggerMiddleware = require('./middleware/loggerMiddleware')

const PORT = 3000
const app = express()

// middleware
app.use(loggerMiddleware)
app.use(express.json())

// routers
app.use(routes)

function start() {
    app.listen(PORT, () => {
        /* eslint-disable-next-line no-console */
        console.log('listen to port:', PORT, '\n')
    })
}

module.exports = {
    start,
}
