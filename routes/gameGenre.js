const gameGenreRoute = require('express').Router();
const { GameGenreController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

gameGenreRoute.get('/', GameGenreController.getAll);
gameGenreRoute.post('/', auth, GameGenreController.add);
gameGenreRoute.put('/:id', auth, GameGenreController.update);
gameGenreRoute.delete('/:id', auth, GameGenreController.delete);

module.exports = gameGenreRoute;