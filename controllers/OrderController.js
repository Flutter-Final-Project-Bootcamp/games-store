const { order } = require('../models')

class OrderController {
    static async getAll(req, res) {
        try {
            let result = await order.findAll({
                order: [
                    ['id', 'asc']
                ]
            });

            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async add(req, res) {
        try {
            const { price, transactionId, gameId } = req.body;

            let result = await order.create({ price, transactionId, gameId });

            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { price, transactionId, gameId } = req.body;

            let result = await order.update({ price, transactionId, gameId },
                { where: { id } });

            result[0] === 1 ?
                res.status(200).json({
                    message: `Order id ${id} updated successfully!`
                }) :
                res.status(404).json({
                    message: `Order id ${id} not updated successfully!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;

            let result = await order.destroy({
                where: { id }
            });

            result === 1 ?
                res.status(200).json({
                    message: `Order id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Order id ${id} not deleted successfully!`
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = OrderController;