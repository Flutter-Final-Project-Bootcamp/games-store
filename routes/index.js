const route = require("express").Router()

route.get("/", (req, res) => {
  res.json({
    message: "Home page",
  })
  // res.render('index.ejs')
})

const gameRoutes = require('./game');

route.use('/game', gameRoutes);

module.exports = route