const jwt = require('jsonwebtoken');

const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
    audience: 'undefined',
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    tokenSigningAlg:"HS256"
});


module.exports = {
    checkJwt
}