function loggerMiddleware(request, response, next) {
    next()
    const { method, url } = request
    const { statusCode } = response
    const logMsg = `${statusCode} - ${method} - ${url}`
    /* eslint-disable-next-line no-console */
    console.log(logMsg)
}

module.exports = loggerMiddleware
