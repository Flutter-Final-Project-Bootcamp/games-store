const gameProfileRoute = require('express').Router()
const { GameProfileController } = require('../controllers/');
const { admin } = require('../middlewares/auth')

gameProfileRoute.get('/', GameProfileController.getGameProfiles)
gameProfileRoute.post('/', admin, GameProfileController.create)
gameProfileRoute.put('/:id', admin, GameProfileController.update)
gameProfileRoute.delete('/:id', admin, GameProfileController.delete)

module.exports = gameProfileRoute