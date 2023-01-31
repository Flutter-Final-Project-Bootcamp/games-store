const GameController = require('./GameController');
const GenreController = require('./GenreController');
const GameGenreController = require('./GameGenreController');
const GameProfileController = require('./GameProfileController');
const UserController = require('./UserController');
const LibraryController = require('./LibraryController')
const CartController = require('./CartController')
const TransactionController = require('./TransactionController')
const OrderController = require('./OrderController')

module.exports = {
    GameController, GenreController, GameGenreController, GameProfileController,
    UserController, LibraryController,
    CartController, TransactionController, OrderController
}