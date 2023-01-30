const { verifyToken } = require('../helpers/jsonwebtoken')

const auth = (req, res, next) => {
    const user_token = req.headers.user_token

    if (user_token) {
        try {
            let verifiedToken = verifyToken(user_token)
            req.userData = verifiedToken
            next()
        } catch (error) {
            res.status(401).json({
                message: "Token not authenticated!"
            })
        }
    } else {
        res.status(404).json({
            message: "User not found!"
        })
    }
}

module.exports = {
    auth
}