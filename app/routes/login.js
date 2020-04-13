const express = require('express')
const Joi = require('joi')
const validate = require('../middleware/validateMiddleware')
const { createToken } = require('../whatever/authentification')

const ROUTE = '/login'
const router = express.Router()

function getUser(username, password) {
    const { USERNAME, PASSWORD } = process.env

    if (username === USERNAME && password === PASSWORD) {
        return {
            username,
        }
    }

    return null
}

const schema = {
    username: Joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    password: Joi
        .string()
        .min(6)
        .required(),
}

router.post(ROUTE, validate(schema), (request, response) => {
    const { username, password } = request.body
    const user = getUser(username, password)

    if (user === null) {
        response.sendStatus(401)
        return
    }

    const token = createToken(user)

    response.cookie('token', token, {
        maxAge: 1000 * 60 * 5, // 5min
        httpOnly: true,
    })
    response.json(true)
})

module.exports = router
