const gameGenreRoute = require('express').Router();
const { GameGenreController } = require('../controllers/');

gameGenreRoute.get('/', GameGenreController.getAll);
gameGenreRoute.post('/', GameGenreController.add);
gameGenreRoute.put('/:id', GameGenreController.update);
gameGenreRoute.delete('/:id', GameGenreController.delete);

module.exports = gameGenreRoute;