const { createToken } = require('../provider/authentification')

function getUser(username, password) {
    const { USERNAME, PASSWORD } = process.env

    if (username === USERNAME && password === PASSWORD) {
        return {
            username,
        }
    }

    return null
}

function loginController(request, response) {
    const { username, password } = request.body
    const user = getUser(username, password)

    if (user === null) {
        response.sendStatus(401)
        return
    }

    const token = createToken(user)

    response.json(token)
}

module.exports = loginController
