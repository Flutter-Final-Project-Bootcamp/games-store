const genreRoute = require('express').Router();
const { GenreController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

genreRoute.get('/', GenreController.getAllGenres);
genreRoute.post('/', auth, GenreController.add);
genreRoute.put('/:id', auth, GenreController.update);
genreRoute.delete('/:id', auth, GenreController.delete);

module.exports = genreRoute;