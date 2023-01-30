const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY || 'tokogame'

const generateToken = (data) => {
    const { id, username, email, image, age } = data
    return jwt.sign({ id, username, email, image, age }, secretKey)
}

const verifyToken = (data) => {
    return jwt.verify(data, secretKey)
}

module.exports = {
    generateToken, verifyToken
}