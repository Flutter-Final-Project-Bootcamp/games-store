const libraryRoute = require('express').Router();
const { LibraryController } = require('../controllers/');
const { auth, admin } = require('../middlewares/auth')

libraryRoute.get('/', admin, LibraryController.getAll);
libraryRoute.post('/', admin, LibraryController.add);
libraryRoute.put('/:id', admin, LibraryController.update);
libraryRoute.delete('/:id', admin, LibraryController.delete);

libraryRoute.get('/library', auth, LibraryController.getByUser)

module.exports = libraryRoute;