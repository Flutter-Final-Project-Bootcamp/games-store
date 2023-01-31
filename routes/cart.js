const cartRoute = require('express').Router();
const { CartController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

cartRoute.get('/', CartController.getAll);
cartRoute.post('/', auth, CartController.add);
cartRoute.put('/:id', auth, CartController.update);
cartRoute.delete('/:id', auth, CartController.delete);

module.exports = cartRoute;