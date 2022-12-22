const gameGenreRoute = require('express').Router();
const { GameGenreController } = require('../controllers/');

gameGenreRoute.get('/', GameGenreController.getAll);
gameGenreRoute.post('/add', GameGenreController.add);
gameGenreRoute.post('/update/:id', GameGenreController.update);
gameGenreRoute.get('/delete/:id', GameGenreController.delete);

module.exports = gameGenreRoute;