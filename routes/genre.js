const genreRoute = require('express').Router();
const { GenreController } = require('../controllers/');

genreRoute.get('/', GenreController.getAllGenres);
genreRoute.post('/', GenreController.add);
genreRoute.put('/:id', GenreController.update);
genreRoute.delete('/:id', GenreController.delete);

module.exports = genreRoute;