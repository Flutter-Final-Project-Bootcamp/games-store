const gameProfileRoute = require('express').Router()
const { GameProfileController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

gameProfileRoute.get('/', GameProfileController.getGameProfiles)
gameProfileRoute.post('/', auth, GameProfileController.create)
gameProfileRoute.put('/:id', auth, GameProfileController.update)
gameProfileRoute.delete('/:id', auth, GameProfileController.delete)

module.exports = gameProfileRoute