const genreRoute = require('express').Router();
const { GenreController } = require('../controllers/');

genreRoute.get('/', GenreController.getAllGenres);
genreRoute.post('/add', GenreController.add);
genreRoute.get('/add', GenreController.addPage);
genreRoute.post('/update/:id', GenreController.update);
genreRoute.get('/delete/:id', GenreController.delete);

module.exports = genreRoute;