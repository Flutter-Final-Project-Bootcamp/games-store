const gameRoute = require('express').Router();
const { GameController } = require('../controllers/');
const { admin } = require('../middlewares/auth')
const upload = require('../middlewares/multer')

gameRoute.get('/', GameController.getAllGames);
gameRoute.post('/', admin, upload('game').single('image'), GameController.add);
gameRoute.put('/:id', admin, upload('game').single('image'), GameController.update);
gameRoute.delete('/:id', admin, GameController.delete);

//Game with genres
gameRoute.get('/game/:id/genres', GameController.getGameGenres);

//A Game with details
gameRoute.get('/game/:id', GameController.getGameById);


module.exports = gameRoute;