const transactionRoute = require('express').Router();
const { TransactionController } = require('../controllers/');
const { auth } = require('../middlewares/auth')

transactionRoute.get('/', TransactionController.getAll);
transactionRoute.post('/', auth, TransactionController.add);
transactionRoute.put('/:id', auth, TransactionController.update);
transactionRoute.delete('/:id', auth, TransactionController.delete);

module.exports = transactionRoute;