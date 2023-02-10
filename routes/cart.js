const cartRoute = require('express').Router();
const { CartController } = require('../controllers/');
const { auth, admin } = require('../middlewares/auth')

cartRoute.get('/', admin, CartController.getAll);
cartRoute.post('/', admin, CartController.add);
cartRoute.put('/:id', admin, CartController.update);
cartRoute.delete('/:id', admin, CartController.delete);

cartRoute.get('/cart', auth, CartController.getByUser);
cartRoute.post('/cart', auth, CartController.addByUser);
cartRoute.delete('/cart/delete/:id', auth, CartController.deleteByUser);
cartRoute.delete('/cart/delete-all', auth, CartController.deleteAllByUser);

module.exports = cartRoute;