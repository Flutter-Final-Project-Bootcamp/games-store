const gameProfileRoute = require('express').Router()
const Controller = require('../controllers/gameProfileController')

gameProfileRoute.get('/', Controller.getGameProfiles)
gameProfileRoute.get('/add', Controller.createPage)
gameProfileRoute.post('/add', Controller.create)
gameProfileRoute.get('/update/:id', Controller.updatePage)
gameProfileRoute.post('/update/:id', Controller.update)
gameProfileRoute.get('/delete/:id', Controller.delete)

module.exports = gameProfileRoute