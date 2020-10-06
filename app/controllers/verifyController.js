const { verifyToken } = require('../provider/authentification')

function verifyController(request, response) {
    const isVerified = verifyToken(request.params.token)

    response.send(isVerified)
}

module.exports = verifyController
