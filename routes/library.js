const libraryRoute = require('express').Router();
const { LibraryController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

libraryRoute.get('/', LibraryController.getAll);
libraryRoute.post('/', auth, LibraryController.add);
libraryRoute.put('/:id', auth, LibraryController.update);
libraryRoute.delete('/:id', auth, LibraryController.delete);

libraryRoute.get('/user', auth, LibraryController.getByIdUser)

module.exports = libraryRoute;