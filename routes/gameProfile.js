const gameProfileRoute = require('express').Router()
const { GameProfileController } = require('../controllers/');

gameProfileRoute.get('/', GameProfileController.getGameProfiles)
gameProfileRoute.post('/', GameProfileController.create)
gameProfileRoute.put('/:id', GameProfileController.update)
gameProfileRoute.delete('/:id', GameProfileController.delete)

module.exports = gameProfileRoute