const transactionRoute = require('express').Router();
const { TransactionController } = require('../controllers/');
const { auth, admin } = require('../middlewares/auth')

transactionRoute.get('/', admin, TransactionController.getAll);
transactionRoute.post('/', admin, TransactionController.add);
transactionRoute.put('/:id', admin, TransactionController.update);
transactionRoute.delete('/:id', admin, TransactionController.delete);

transactionRoute.get('/transaction', auth, TransactionController.getByUser);
transactionRoute.post('/transaction', auth, TransactionController.addByUser);

module.exports = transactionRoute;