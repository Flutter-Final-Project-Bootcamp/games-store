const gameRoute = require('express').Router();
const { GameController } = require('../controllers/');
const upload = require('../middlewares/multer')

gameRoute.get('/', GameController.getAllGames);
gameRoute.post('/', upload('game').single('image'), GameController.add);
gameRoute.put('/:id', upload('game').single('image'), GameController.update);
gameRoute.delete('/:id', GameController.delete);

//Game with genres
gameRoute.get('/game/:id/genres', GameController.getGameGenres);

//All Game with all details
gameRoute.get('/game/details', GameController.getAllGameDetails);

//A Game with all details
gameRoute.get('/game/details/:id', GameController.getGameDetails);


module.exports = gameRoute;