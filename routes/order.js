const orderRoute = require('express').Router();
const { OrderController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

orderRoute.get('/', OrderController.getAll);
orderRoute.post('/', auth, OrderController.add);
orderRoute.put('/:id', auth, OrderController.update);
orderRoute.delete('/:id', auth, OrderController.delete);

module.exports = orderRoute;