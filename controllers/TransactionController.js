const { transaction, order, game, library } = require('../models')

class TransactionController {
    static async getAll(req, res) {
        try {
            let result = await transaction.findAll({
                include: { all: true },
                order: [
                    ['createdAt', 'desc']
                ]
            });

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async add(req, res) {
        try {
            const { payment, status, games } = req.body;
            const userId = +req.userData.id

            let total_price = 0
            for (const gameId of games) {
                let getGame = await game.findByPk(gameId)
                total_price += getGame.price
            }
            let result = await transaction.create({ total_price, payment, status, userId });
            for (const gameId of games) {
                let getGame = await game.findByPk(gameId)
                await order.create({ price: getGame.price, transactionId: result.id, gameId })
                await library.create({ userId, gameId });
            }

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { payment, status, games } = req.body;
            const userId = +req.userData.id

            let total_price = 0
            await order.destroy({ where: { transactionId: id } });
            for (const gameId of games) {
                let getGame = await game.findByPk(gameId)
                total_price += getGame.price
            }
            let result = await transaction.update({ total_price, payment, status, userId },
                { where: { id } });
            for (const gameId of games) {
                let getGame = await game.findByPk(gameId)
                await order.create({ price: getGame.price, transactionId: result.id, gameId })
            }

            result[0] === 1 ?
                res.status(200).json({
                    message: `Transaction id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Transaction id ${id} not updated successfully!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            let result = await transaction.destroy({
                where: { id }
            });
            await order.destroy({ where: { transactionId: id } })

            result === 1 ?
                res.status(200).json({
                    message: `Transaction id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Transaction id ${id} not deleted successfully!`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = TransactionController;