const route = require("express").Router()

route.get("/", (req, res) => {
  res.json({
    message: "Home page",
  })
  // res.render('index.ejs')
})

module.exports = route