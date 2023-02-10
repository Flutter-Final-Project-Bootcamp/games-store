const orderRoute = require('express').Router();
const { OrderController } = require('../controllers/');
const { admin } = require('../middlewares/auth')

orderRoute.get('/', admin, OrderController.getAll);
orderRoute.post('/', admin, OrderController.add);
orderRoute.put('/:id', admin, OrderController.update);
orderRoute.delete('/:id', admin, OrderController.delete);

module.exports = orderRoute;