const route = require("express").Router()

route.get("/", (req, res) => {
    res.render('index.ejs')
})

const gameRoutes = require('./game');
const gameProfileRoute = require("./gameProfile")
const genreRoutes = require('./genre')

route.use('/game', gameRoutes);
route.use('/genre', genreRoutes);
route.use("/game-profiles", gameProfileRoute)

module.exports = route