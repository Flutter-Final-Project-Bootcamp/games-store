const gameGenreRoute = require('express').Router();
const { GameGenreController } = require('../controllers/');
const { admin } = require('../middlewares/auth')

gameGenreRoute.get('/', GameGenreController.getAll);
gameGenreRoute.post('/', admin, GameGenreController.add);
gameGenreRoute.put('/:id', admin, GameGenreController.update);
gameGenreRoute.delete('/:id', admin, GameGenreController.delete);

module.exports = gameGenreRoute;