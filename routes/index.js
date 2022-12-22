const route = require("express").Router()

route.get("/", (req, res) => {
    res.render('index.ejs')
})

const gameRoutes = require('./game');
const gameProfileRoute = require("./gameProfile")
const genreRoutes = require('./genre')
const gameGenreRoutes = require('./gameGenre')

route.use('/game', gameRoutes);
route.use("/game-profiles", gameProfileRoute)
route.use('/genre', genreRoutes);
route.use('/game-genre', gameGenreRoutes);

module.exports = route