const { verifyToken } = require('../provider/authentification')

function verifyController(request, response) {
    const isVeryfied = verifyToken(request.params.token)

    response.send(isVeryfied)
}

module.exports = verifyController
