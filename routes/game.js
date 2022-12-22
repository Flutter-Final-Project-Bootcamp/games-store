const gameRoute = require('express').Router();
const { GameController } = require('../controllers/');

gameRoute.get('/', GameController.getAllGames);
gameRoute.post('/add', GameController.add);
gameRoute.post('/update/:id', GameController.update);
gameRoute.get('/delete/:id', GameController.delete);

module.exports = gameRoute;