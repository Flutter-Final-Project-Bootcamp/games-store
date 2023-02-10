const genreRoute = require('express').Router();
const { GenreController } = require('../controllers/');
const { admin } = require('../middlewares/auth')

genreRoute.get('/', GenreController.getAllGenres);
genreRoute.post('/', admin, GenreController.add);
genreRoute.put('/:id', admin, GenreController.update);
genreRoute.delete('/:id', admin, GenreController.delete);

genreRoute.get('/genre/:id', GenreController.getGenreById);

module.exports = genreRoute;