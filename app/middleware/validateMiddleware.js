const Joi = require('joi')

const validateMiddleware = (schema) => (request, response, next) => {
    const validation = Joi.validate(request.body, schema)
    if (validation.error) {
        response.status(400)
        response.send(validation.error.details[0].message)
    } else {
        next()
    }
}

module.exports = validateMiddleware
