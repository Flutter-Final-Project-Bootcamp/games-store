const route = require("express").Router()

route.get("/api", (req, res) => {
    res.status(200).json({
        message: "Dashboard App API"
    })
})

const userRoutes = require('./user')
const gameRoutes = require('./game');
const gameProfileRoute = require("./gameProfile")
const genreRoutes = require('./genre')
const gameGenreRoutes = require('./gameGenre')
const libraryRoutes = require('./library')
const cartRoutes = require('./cart')
const transactionRoutes = require('./transaction')
const orderRoutes = require('./order')

route.use('/api/users', userRoutes)
route.use('/api/games', gameRoutes);
route.use("/api/game-profiles", gameProfileRoute)
route.use('/api/genres', genreRoutes);
route.use('/api/game-genres', gameGenreRoutes);
route.use('/api/libraries', libraryRoutes)
route.use('/api/carts', cartRoutes)
route.use('/api/transactions', transactionRoutes)
route.use('/api/orders', orderRoutes)

module.exports = route