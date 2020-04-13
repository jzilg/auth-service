const jwt = require('jsonwebtoken')

const { SECRET } = process.env

function createToken(user) {
    const token = jwt.sign(user, SECRET, {
        expiresIn: '300s',
    })

    return token
}

function verifyToken(token) {
    if (!token) {
        return false
    }

    try {
        return typeof jwt.verify(token, SECRET) === 'object'
    } catch (error) {
        return false
    }
}

module.exports = {
    createToken,
    verifyToken,
}
