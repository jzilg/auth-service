const express = require('express')
const loginController = require('./controllers/loginController')
const verifyController = require('./controllers/verifyController')

const router = express.Router()

router.get('/test', (request, response) => {
    response.send('It works')
})

router.post('/login', loginController)

router.get('/verify/:token', verifyController)

module.exports = router
