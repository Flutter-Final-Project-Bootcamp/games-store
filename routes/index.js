const route = require("express").Router()

route.get("/", (req, res) => {
    res.render('index.ejs')
})

const gameRoutes = require('./game');

route.use('/game', gameRoutes);


const gameProfileRoute = require("./gameProfile")
route.use("/game-profiles", gameProfileRoute)

module.exports = route