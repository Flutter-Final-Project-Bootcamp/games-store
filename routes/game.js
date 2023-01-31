const gameRoute = require('express').Router();
const { GameController } = require('../controllers/');
const { auth } = require('../middlewares/auth')
const upload = require('../middlewares/multer')

gameRoute.get('/', GameController.getAllGames);
gameRoute.post('/', auth, upload('game').single('image'), GameController.add);
gameRoute.put('/:id', auth, upload('game').single('image'), GameController.update);
gameRoute.delete('/:id', auth, GameController.delete);

//Game with genres
gameRoute.get('/game/:id/genres', GameController.getGameGenres);

//A Game with details
gameRoute.get('/game/:id', GameController.getGameById);


module.exports = gameRoute;